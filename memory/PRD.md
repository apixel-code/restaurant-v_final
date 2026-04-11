# Burger House Restaurant - PRD

## Original Problem Statement
GitHub repo: https://github.com/marinaakter/restaurant-project-tempalte
Bug: User submits order form -> success modal appears -> but admin panel doesn't show orders. Orders ARE saved in MongoDB correctly.

## Architecture
- **Backend**: FastAPI (Python) with MongoDB (motor async driver)
- **Frontend**: React with Tailwind CSS, Framer Motion, react-hot-toast
- **Auth**: JWT-based admin authentication (password only)
- **Database**: MongoDB (test_database)

## Root Cause Analysis
The Emergent platform's ingress/Cloudflare layer was overriding the backend's CORS headers with `Access-Control-Allow-Origin: *`. Combined with the backend's `Access-Control-Allow-Credentials: true`, browsers rejected this invalid combination per CORS spec. Result: admin auth cookies were never stored by the browser, causing 401 errors when fetching orders.

## What's Been Implemented (Apr 11, 2026)
1. **Bug Fix**: Switched from cookie-based auth to JWT token-based auth (localStorage + Authorization header)
   - Modified `AdminContext.jsx` - stores JWT in localStorage, sends via Authorization header
   - Modified `AdminDashboard.jsx` - uses `getAuthHeaders()` instead of `withCredentials: true`
   - Modified `server.py` - login endpoint now returns token in response body
   - Updated `backend/.env` - CORS_ORIGINS set to actual frontend URL
2. **Testing**: All backend (100%) and frontend (100%) tests passed

## Core Requirements
- [x] User can place orders via contact form
- [x] Orders saved to MongoDB
- [x] Admin can login with password
- [x] Admin can view all orders
- [x] Admin can update order status
- [x] Admin can manage menu items (CRUD)

## Backlog
- P2: Order notification system (real-time updates)
- P2: Order filtering/search in admin
- P3: Multiple admin users support
