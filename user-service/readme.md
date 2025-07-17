# User Service (Microservices System)

Handles user profile information (not authentication).

## Features
- Get and update user profiles
- MongoDB with Mongoose
- REST API Endpoints
- Dockerized

## Endpoints
- `GET /api/users/:id`
- `PUT /api/users/:id`

## Getting Started
```bash
cd user-service
npm install
npm start
```

Or use Docker:
```bash
docker-compose up --build
```

## Env Variables
```
MONGODB_URI=mongodb://mongo:27017/userdb
PORT=5001
```