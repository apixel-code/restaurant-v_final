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
    """Return (secure, samesite) for admin auth cookie.

    Override with COOKIE_SECURE and COOKIE_SAMESITE env vars when needed.
    """
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
        # Cross-site cookie for browser requests (e.g., localhost frontend -> HTTPS Render backend).
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

# ============ Status Routes ============

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

# ============ Admin Auth Routes ============

@api_router.post("/admin/login")
async def admin_login(data: AdminLogin, request: Request, response: Response):
    """Login with password only"""
    admin = await db.admins.find_one({"role": "admin"})
    
    if not admin:
        raise HTTPException(status_code=401, detail="অ্যাডমিন সেটআপ করা হয়নি")
    
    if not verify_password(data.password, admin["password_hash"]):
        raise HTTPException(status_code=401, detail="ভুল পাসওয়ার্ড")
    
    token = create_access_token(str(admin["_id"]))
    cookie_secure, cookie_samesite = resolve_cookie_policy(request)

    response.set_cookie(
        key="admin_token",
        value=token,
        httponly=True,
        secure=cookie_secure,
        samesite=cookie_samesite,
        max_age=86400,
        path="/"
    )
    return {"success": True, "message": "লগইন সফল", "token": token}

@api_router.post("/admin/logout")
async def admin_logout(response: Response):
    response.delete_cookie("admin_token", path="/")
    return {"success": True, "message": "লগআউট সফল"}

@api_router.get("/admin/me")
async def admin_me(request: Request):
    """Return current auth status without raising 401 for initial auth probes."""
    try:
        admin = await get_current_admin(request)
        return {"authenticated": True, "role": "admin", "id": admin["id"]}
    except HTTPException:
        return {"authenticated": False}

# ============ Menu Management Routes ============

@api_router.get("/menu")
async def get_menu_items():
    """Get all menu items"""
    items = await db.menu_items.find({}, {"_id": 0}).to_list(100)
    return items

@api_router.post("/admin/menu")
async def create_menu_item(item: MenuItemCreate, admin: dict = Depends(get_current_admin)):
    """Create a new menu item"""
    item_dict = item.model_dump()
    item_dict["id"] = str(uuid.uuid4())
    item_dict["created_at"] = datetime.now(timezone.utc).isoformat()
    await db.menu_items.insert_one(item_dict)
    return {"success": True, "item": {k: v for k, v in item_dict.items() if k != "_id"}}

@api_router.put("/admin/menu/{item_id}")
async def update_menu_item(item_id: str, item: MenuItemUpdate, admin: dict = Depends(get_current_admin)):
    """Update a menu item"""
    update_data = {k: v for k, v in item.model_dump().items() if v is not None}
    if not update_data:
        raise HTTPException(status_code=400, detail="কিছু আপডেট করার জন্য দিন")
    
    result = await db.menu_items.update_one({"id": item_id}, {"$set": update_data})
    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="আইটেম পাওয়া যায়নি")
    return {"success": True, "message": "আপডেট সফল"}

@api_router.delete("/admin/menu/{item_id}")
async def delete_menu_item(item_id: str, admin: dict = Depends(get_current_admin)):
    """Delete a menu item"""
    result = await db.menu_items.delete_one({"id": item_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="আইটেম পাওয়া যায়নি")
    return {"success": True, "message": "ডিলিট সফল"}

# ============ Order Routes ============

@api_router.post("/orders")
async def create_order(order: OrderCreate):
    """Create a new order"""
    order_dict = order.model_dump()
    order_dict["id"] = str(uuid.uuid4())
    order_dict["status"] = "pending"
    order_dict["created_at"] = datetime.now(timezone.utc).isoformat()
    await db.orders.insert_one(order_dict)
    return {"success": True, "order_id": order_dict["id"]}

@api_router.get("/admin/orders")
async def get_orders(admin: dict = Depends(get_current_admin)):
    """Get all orders"""
    orders = await db.orders.find({}, {"_id": 0}).sort("created_at", -1).to_list(100)
    return orders

@api_router.put("/admin/orders/{order_id}/status")
async def update_order_status(order_id: str, status: str, admin: dict = Depends(get_current_admin)):
    """Update order status"""
    valid_statuses = ["pending", "confirmed", "preparing", "delivered", "cancelled"]
    if status not in valid_statuses:
        raise HTTPException(status_code=400, detail="অবৈধ স্ট্যাটাস")
    
    result = await db.orders.update_one({"id": order_id}, {"$set": {"status": status}})
    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="অর্ডার পাওয়া যায়নি")
    return {"success": True, "message": "স্ট্যাটাস আপডেট হয়েছে"}

@api_router.delete("/admin/orders/{order_id}")
async def delete_order(order_id: str, admin: dict = Depends(get_current_admin)):
    """Delete an order"""
    result = await db.orders.delete_one({"id": order_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="অর্ডার পাওয়া যায়নি")
    return {"success": True, "message": "অর্ডার ডিলিট হয়েছে"}

# ============ Startup Events ============

@app.on_event("startup")
async def startup_event():
    """Seed admin user and default menu items"""
    # Create admin if not exists
    admin = await db.admins.find_one({"role": "admin"})
    if not admin:
        hashed = hash_password(ADMIN_PASSWORD)
        await db.admins.insert_one({
            "role": "admin",
            "password_hash": hashed,
            "created_at": datetime.now(timezone.utc).isoformat()
        })
        logger.info("Admin user created with default password")
    else:
        # Update password if changed in env
        if not verify_password(ADMIN_PASSWORD, admin["password_hash"]):
            await db.admins.update_one(
                {"role": "admin"},
                {"$set": {"password_hash": hash_password(ADMIN_PASSWORD)}}
            )
            logger.info("Admin password updated from env")
    
    # Seed default menu items if empty
    count = await db.menu_items.count_documents({})
    if count == 0:
        default_items = [
            {"id": str(uuid.uuid4()), "category": "pizza", "name": "চিকেন পিৎজা রেগুলার", "size": "৭\" - ৯\"", "price": "১৫০ - ২০০", "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500", "description": "রসালো চিকেন, মোজারেলা চিজ এবং স্পেশাল সস", "popular": True},
            {"id": str(uuid.uuid4()), "category": "pizza", "name": "সস পিৎজা", "size": "৭\" - ৯\"", "price": "১৫০ - ২০০", "image": "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500", "description": "টম্যাটো সস, হার্ব এবং গলানো চিজ", "popular": False},
            {"id": str(uuid.uuid4()), "category": "pizza", "name": "মাশরুম পিৎজা", "size": "৭\" - ৯\"", "price": "১৫০ - ২০০", "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500", "description": "ফ্রেশ মাশরুম, চিজ এবং ইতালিয়ান হার্ব", "popular": False},
            {"id": str(uuid.uuid4()), "category": "pizza", "name": "ওভারলোড চিকেন পিৎজা", "size": "৭\" - ৯\"", "price": "২০০ - ২৫০", "image": "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500", "description": "এক্সট্রা চিকেন, ডবল চিজ এবং লোডেড টপিংস", "popular": True},
            {"id": str(uuid.uuid4()), "category": "pasta", "name": "এগ নুডলস", "size": "", "price": "৭০", "image": "https://images.unsplash.com/photo-1612927601601-6638404737ce?w=500", "description": "ডিম দিয়ে তৈরি সুস্বাদু নুডলস", "popular": False},
            {"id": str(uuid.uuid4()), "category": "pasta", "name": "চিকেন নুডলস", "size": "", "price": "১০০", "image": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500", "description": "টেন্ডার চিকেন পিস সহ নুডলস", "popular": True},
            {"id": str(uuid.uuid4()), "category": "pasta", "name": "পাস্তা রেগুলার", "size": "", "price": "৭০", "image": "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=500", "description": "ক্লাসিক ইতালিয়ান স্টাইল পাস্তা", "popular": False},
            {"id": str(uuid.uuid4()), "category": "pasta", "name": "চিকেন পাস্তা", "size": "", "price": "১০০", "image": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500", "description": "ক্রিমি সস এবং গ্রিলড চিকেন", "popular": True},
            {"id": str(uuid.uuid4()), "category": "pasta", "name": "চিজ পাস্তা", "size": "", "price": "১৫০", "image": "https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=500", "description": "এক্সট্রা চিজি এবং ক্রিমি", "popular": True},
            {"id": str(uuid.uuid4()), "category": "setmenu", "name": "ফ্রাইড রাইস + ক্রিসপি চিকেন", "size": "", "price": "১৩০", "image": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500", "description": "গরম ফ্রাইড রাইস এবং ক্রিসপি ফ্রাইড চিকেন", "popular": True},
            {"id": str(uuid.uuid4()), "category": "setmenu", "name": "ফ্রাইড রাইস + চিকেন কারি", "size": "", "price": "১৩০", "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500", "description": "ফ্রাইড রাইস এবং ঝাল চিকেন কারি", "popular": False},
            {"id": str(uuid.uuid4()), "category": "setmenu", "name": "ফ্রাইড রাইস + ক্রিসপি চিকেন + কারি", "size": "", "price": "২০০", "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500", "description": "কমপ্লিট মিল - ভাত, চিকেন এবং কারি", "popular": True},
        ]
        for item in default_items:
            item["created_at"] = datetime.now(timezone.utc).isoformat()
        await db.menu_items.insert_many(default_items)
        logger.info("Default menu items seeded")
    
    # Write test credentials to a local workspace directory.
    creds_dir = ROOT_DIR.parent / "memory"
    os.makedirs(creds_dir, exist_ok=True)
    with open(creds_dir / "test_credentials.md", "w") as f:
        f.write("# Admin Credentials\n\n")
        f.write(f"- **Password:** {ADMIN_PASSWORD}\n")
        f.write(f"- **Role:** admin\n\n")
        f.write("## Endpoints\n")
        f.write("- POST /api/admin/login\n")
        f.write("- POST /api/admin/logout\n")
        f.write("- GET /api/admin/me\n")
        f.write("- GET /api/admin/orders\n")
        f.write("- POST /api/admin/menu\n")

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()

# Include the router in the main app
app.include_router(api_router)

cors_origins_raw = os.environ.get('CORS_ORIGINS', 'http://localhost:3000,http://127.0.0.1:3000')
cors_origins = [origin.strip() for origin in cors_origins_raw.split(',') if origin.strip()]

if cors_origins == ['*']:
    # Credentials + wildcard origin is invalid in browsers. Fall back to safe defaults.
    cors_origins = ['http://localhost:3000', 'http://127.0.0.1:3000']
    logger.warning('CORS_ORIGINS="*" is not compatible with credentialed auth; using explicit origins instead.')

# Always include FRONTEND_URL if set
frontend_url = os.environ.get('FRONTEND_URL', '').strip()
if frontend_url and frontend_url not in cors_origins:
    cors_origins.append(frontend_url)

logger.info(f"CORS allowed origins: {cors_origins}")

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=cors_origins,
    allow_methods=["*"],
    allow_headers=["*"],
)
