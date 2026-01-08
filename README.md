# 🛍️ Ecommerce Store (React + Redux + Node + MySQL)

A full-stack ecommerce web application with product listing, cart management,
authentication, and secure backend API.

---

## 📁 Project Structure

```
.
├── backend/        # Node.js + Express API + mysql
├── frontend/       # React + Redux Toolkit UI
└── README.md       # Project information
```

---

## 🚀 Tech Stack

### Frontend
- React (Vite)
- Redux Toolkit
- React Router DOM
- Axios
- Tailwind CSS

### Backend
- Node.js + Express
- JWT Authentication
- Bcrypt password hashing
- MySQL (mysql2 / Sequelize)
- Express Middleware (auth, error handler)

---

## 🧰 Features

- 🔐 User Signup & Login (JWT)
- 🛒 Add/Remove products from cart
- 📦 Product list & details
- 💾 MySQL database storage
- ⚙️ State managed by Redux Toolkit
- 🌐 REST API with protected endpoints

---

## 🏁 How to Run the Project Locally

### 1️⃣ Clone repository
```bash
git clone https://github.com/Suba13/shopnest.git
```

---

### 2️⃣ Install dependencies

#### Frontend
```bash
cd frontend
npm install
```

#### Backend
```bash
cd ../backend
npm install
```

---

### 3️⃣ Setup Environment Variables

Create `.env` in `/backend`:

```
DB_HOST='127.0.0.1'
DB_USER='root'
DB_PASSWORD='Bssa1393@17'
DB_NAME='shopnest_db'
PORT=5000
JWT_SECRET="shopnest_secret_key"
```

Create database:
```sql
CREATE DATABASE shopnest_db;
```

---

### 4️⃣ Start Backend
```bash
cd backend
npm run dev
```

Backend runs at:
```
http://localhost:5000
```

---

### 5️⃣ Start Frontend
```bash
cd frontend
npm run dev
```

Frontend runs at:
```
http://localhost:5173
```

---

## 🧪 API Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | /api/products        | Get all products |
| GET    | /api/products/:id    | Product by ID |
| POST   | /api/users/login     | Login user + token |

---

## 🎯 Future Enhancements
- Admin dashboard
- Product categories & filters
- Orders and checkout
- Payment integration (Stripe/PayPal)

---

## 👩‍💻 Author
**Suba** — Full stack developer  
Skills: React, Redux, Node.js, SQL, CI/CD, Tailwind

