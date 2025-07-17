# Auth Service (Microservices System)

A simple Node.js + Express-based Auth Microservice using MongoDB and JWT.

## Features
- User Signup & Login
- JWT Token Generation & Validation
- REST API Endpoints
- Dockerized for easy deployment

## Endpoints
- `POST /api/auth/signup`
- `POST /api/auth/login`
- `GET /api/auth/validate` (requires `Authorization: Bearer <token>`)

## Getting Started
```bash
git clone <this-repo>
cd auth-service
cp .env.example .env
npm install
npm start
```

Or use Docker:
```bash
docker-compose up --build
```

## Env Variables
Create a `.env` file:
```
MONGODB_URI=mongodb://mongo:27017/authdb
JWT_SECRET=supersecretkey
PORT=5000
```