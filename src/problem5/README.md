# 🛠️ Node.js CRUD API with TypeScript, Express, and MongoDB

This is a **CRUD backend server** built with **ExpressJS** and **TypeScript**, using **Mongoose** for MongoDB interaction.  
The project follows a **3-layer architecture**:

- **Model Layer**: Mongoose schemas & models  
- **Service Layer**: Business logic & database operations  
- **Controller Layer**: HTTP request handling  

---

## 📂 Project Structure
src/problem5/
├── models/ # Mongoose schemas & models
│ └── Item.ts
├── services/ # Business logic
│ └── itemService.ts
├── controllers/ # HTTP route handlers (controllers)
│ └── itemController.ts
├── routes/ # API route definitions
│ └── itemRoutes.ts
└── index.ts # App entry point

## Installation and run

    1️⃣ Install dependencies:
        npm install

    2️⃣ Create .env file and copy content from .env.example

    3️⃣ Run project:
        npm run problem5

## API routes
| Method | Endpoint     | Description                   |
| ------ | ------------ | ----------------------------- |
| POST   | `/items`     | Create an item                |
| GET    | `/items`     | List items (filter by `name`) |
| GET    | `/items/:id` | Get item details              |
| PUT    | `/items/:id` | Update an item                |
| DELETE | `/items/:id` | Delete an item                |
