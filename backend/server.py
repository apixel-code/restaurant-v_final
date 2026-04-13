from fastapi import FastAPI, APIRouter, HTTPException, Request, Response, Depends
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import certifi
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
from urllib.parse import urlparse
import uuid
from datetime import datetime, timezone, timedelta
import bcrypt
import jwt

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
mongo_client_kwargs = {}
if "mongodb.net" in mongo_url or mongo_url.startswith("mongodb+srv://"):
    mongo_client_kwargs["tlsCAFile"] = certifi.where()

client = AsyncIOMotorClient(mongo_url, **mongo_client_kwargs)
db = client[os.environ['DB_NAME']]

# JWT Configuration
JWT_SECRET = os.environ.get('JWT_SECRET', 'burger-house-super-secret-key-2024')
JWT_ALGORITHM = "HS256"
ADMIN_PASSWORD = os.environ.get('ADMIN_PASSWORD', 'admin123')


def _env_bool(name: str) -> Optional[bool]:
    raw = os.environ.get(name)
    if raw is None:
        return None
    return raw.strip().lower() in {"1", "true", "yes", "on"}


def resolve_cookie_policy(request: Request) -> tuple[bool, str]:
    env_secure = _env_bool("COOKIE_SECURE")
    env_samesite = os.environ.get("COOKIE_SAMESITE")
    if env_samesite:
        env_samesite = env_samesite.strip().lower()

    if env_secure is not None or env_samesite in {"lax", "strict", "none"}:
        secure = bool(env_secure) if env_secure is not None else False
        samesite = env_samesite if env_samesite in {"lax", "strict", "none"} else "lax"
        return secure, samesite

    origin = request.headers.get("origin")
    if not origin:
        return False, "lax"

    parsed_origin = urlparse(origin)
    req_scheme = request.url.scheme
    req_host = request.url.hostname
    cross_site = (
        parsed_origin.hostname is not None
        and req_host is not None
        and (parsed_origin.hostname != req_host or parsed_origin.scheme != req_scheme)
    )

    if cross_site:
        return True, "none"

    return False, "lax"

# Create the main app
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# ============ Models ============

class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

class AdminLogin(BaseModel):
    password: str

class MenuItemCreate(BaseModel):
    name: str
    category: str
    price: str
    description: str
    image: str = ""
    size: str = ""
    popular: bool = False

class MenuItemUpdate(BaseModel):
    name: Optional[str] = None
    category: Optional[str] = None
    price: Optional[str] = None
    description: Optional[str] = None
    image: Optional[str] = None
    size: Optional[str] = None
    popular: Optional[bool] = None

class OrderCreate(BaseModel):
    name: str
    phone: str
    address: str
    item: str

# ============ Password & JWT Functions ============

def hash_password(password: str) -> str:
    salt = bcrypt.gensalt()
    return bcrypt.hashpw(password.encode("utf-8"), salt).decode("utf-8")

def verify_password(plain_password: str, hashed_password: str) -> bool:
    return bcrypt.checkpw(plain_password.encode("utf-8"), hashed_password.encode("utf-8"))

def create_access_token(admin_id: str) -> str:
    payload = {
        "sub": admin_id,
        "exp": datetime.now(timezone.utc) + timedelta(hours=24),
        "type": "access"
    }
    return jwt.encode(payload, JWT_SECRET, algorithm=JWT_ALGORITHM)

async def get_current_admin(request: Request) -> dict:
    token = request.cookies.get("admin_token")
    if not token:
        auth_header = request.headers.get("Authorization", "")
        if auth_header.startswith("Bearer "):
            token = auth_header[7:]
    if not token:
        raise HTTPException(status_code=401, detail="Not authenticated")
    try:
        payload = jwt.decode(token, JWT_SECRET, algorithms=[JWT_ALGORITHM])
        if payload.get("type") != "access":
            raise HTTPException(status_code=401, detail="Invalid token type")
        return {"id": payload["sub"], "role": "admin"}
    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Token expired")
    except jwt.InvalidTokenError:
        raise HTTPException(status_code=401, detail="Invalid token")

# ============ Routes ============

@api_router.get("/")
async def root():
    return {"message": "Burger House API"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    return status_checks

@api_router.post("/admin/login")
async def admin_login(data: AdminLogin, request: Request, response: Response):
    admin = await db.admins.find_one({"role": "admin"})
    if not admin or not verify_password(data.password, admin["password_hash"]):
        raise HTTPException(status_code=401, detail="ভুল পাসওয়ার্ড")
    
    token = create_access_token(str(admin["_id"]))
    cookie_secure, cookie_samesite = resolve_cookie_policy(request)
    response.set_cookie(key="admin_token", value=token, httponly=True, secure=cookie_secure, samesite=cookie_samesite, max_age=86400, path="/")
    return {"success": True, "token": token}

@api_router.post("/admin/logout")
async def admin_logout(response: Response):
    response.delete_cookie("admin_token", path="/")
    return {"success": True}

@api_router.get("/admin/me")
async def admin_me(request: Request):
    try:
        admin = await get_current_admin(request)
        return {"authenticated": True, "role": "admin", "id": admin["id"]}
    except HTTPException:
        return {"authenticated": False}

@api_router.get("/menu")
async def get_menu_items():
    return await db.menu_items.find({}, {"_id": 0}).to_list(100)

@api_router.post("/admin/menu")
async def create_menu_item(item: MenuItemCreate, admin: dict = Depends(get_current_admin)):
    item_dict = item.model_dump()
    item_dict["id"] = str(uuid.uuid4())
    item_dict["created_at"] = datetime.now(timezone.utc).isoformat()
    await db.menu_items.insert_one(item_dict)
    return {"success": True, "item": {k: v for k, v in item_dict.items() if k != "_id"}}

@api_router.put("/admin/menu/{item_id}")
async def update_menu_item(item_id: str, item: MenuItemUpdate, admin: dict = Depends(get_current_admin)):
    update_data = {k: v for k, v in item.model_dump().items() if v is not None}
    result = await db.menu_items.update_one({"id": item_id}, {"$set": update_data})
    if result.matched_count == 0: raise HTTPException(status_code=404)
    return {"success": True}

@api_router.delete("/admin/menu/{item_id}")
async def delete_menu_item(item_id: str, admin: dict = Depends(get_current_admin)):
    result = await db.menu_items.delete_one({"id": item_id})
    if result.deleted_count == 0: raise HTTPException(status_code=404)
    return {"success": True}

@api_router.post("/orders")
async def create_order(order: OrderCreate):
    order_dict = order.model_dump()
    order_dict["id"] = str(uuid.uuid4())
    order_dict["status"] = "pending"
    order_dict["created_at"] = datetime.now(timezone.utc).isoformat()
    await db.orders.insert_one(order_dict)
    return {"success": True, "order_id": order_dict["id"]}

@api_router.get("/admin/orders")
async def get_orders(admin: dict = Depends(get_current_admin)):
    return await db.orders.find({}, {"_id": 0}).sort("created_at", -1).to_list(100)

@api_router.put("/admin/orders/{order_id}/status")
async def update_order_status(order_id: str, status: str, admin: dict = Depends(get_current_admin)):
    allowed_statuses = {"pending", "confirmed", "preparing", "delivered", "cancelled"}
    if status not in allowed_statuses:
        raise HTTPException(status_code=400, detail="Invalid status")

    result = await db.orders.update_one(
        {"id": order_id},
        {"$set": {"status": status, "updated_at": datetime.now(timezone.utc).isoformat()}},
    )
    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="Order not found")
    return {"success": True}

@api_router.delete("/admin/orders/{order_id}")
async def delete_order(order_id: str, admin: dict = Depends(get_current_admin)):
    result = await db.orders.delete_one({"id": order_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Order not found")
    return {"success": True}

# ============ Startup & Shutdown ============

@app.on_event("startup")
async def startup_event():
    admin = await db.admins.find_one({"role": "admin"})
    if not admin:
        await db.admins.insert_one({"role": "admin", "password_hash": hash_password(ADMIN_PASSWORD), "created_at": datetime.now(timezone.utc).isoformat()})
    
    count = await db.menu_items.count_documents({})
    if count == 0:
        # Initial Seed Data...
        pass

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()

# ============ Dynamic CORS Logic (FOR MULTI-CLIENT) ============

app.include_router(api_router)

cors_origins_raw = os.environ.get('CORS_ORIGINS', 'http://localhost:3000')
cors_origins = [origin.strip() for origin in cors_origins_raw.split(',') if origin.strip()]

if '*' in cors_origins:
    @app.middleware("http")
    async def dynamic_cors_middleware(request: Request, call_next):
        if request.method == "OPTIONS":
            response = Response()
        else:
            response = await call_next(request)
        
        origin = request.headers.get("origin")
        if origin:
            # Allow localhost and any vercel app
            if "localhost" in origin or "127.0.0.1" in origin or ".vercel.app" in origin:
                response.headers["Access-Control-Allow-Origin"] = origin
                response.headers["Access-Control-Allow-Credentials"] = "true"
                response.headers["Access-Control-Allow-Methods"] = "GET, POST, PUT, DELETE, OPTIONS"
                response.headers["Access-Control-Allow-Headers"] = "Content-Type, Authorization"
        
        if request.method == "OPTIONS":
            response.status_code = 204
        return response
else:
    app.add_middleware(
        CORSMiddleware,
        allow_credentials=True,
        allow_origins=cors_origins,
        allow_methods=["*"],
        allow_headers=["*"],
    )