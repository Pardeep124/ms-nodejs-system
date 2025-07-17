# API Gateway

This service routes requests to:
- `/auth/*` → Auth Service (port 5001)
- `/users/*` → User Service (port 5002)

## Start
```bash
npm install
npm run dev
```
Runs on `http://localhost:5000`