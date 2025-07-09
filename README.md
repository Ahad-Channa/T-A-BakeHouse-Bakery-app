# 🧁 T&A Bakehouse – MERN Stack Bakery E-commerce App

T&A Bakehouse is a full-featured bakery e-commerce web application built using the **MERN stack (MongoDB, Express.js, React, Node.js)**. It allows customers to browse products, manage their cart, and place orders, while providing an admin dashboard to manage categories, products, orders, and customer feedback.


## ✨ Features

### 👥 Authentication & Authorization
- Register & login as **User** or **Admin**
- JWT-based secure authentication
- Role-based access control for users and admins

### 🛍️ Client Features
- Browse bakery products by category
- Add to cart & persistent cart using `localStorage`
- Checkout with form validation using **Formik + Yup**
- View and track **My Orders** with real-time status

### 🧑‍💼 Admin Dashboard
- Manage categories with image upload
- Manage products with images and categorization
- View and manage incoming & previous orders
- Accept/reject orders and update statuses


---

## 🧰 Tech Stack

### Frontend
- React
- React Router DOM
- Tailwind CSS
- Axios
- Formik + Yup

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- Multer (image uploads)
- JSON Web Tokens (JWT)

---




## 🚀 Getting Started

### 🔧 Prerequisites
- Node.js & npm
- MongoDB Atlas or local MongoDB
- Git

### 🔑 Environment Variables

Create a `.env` file in the `server/` directory:




---

### 🖥️ Run Locally

#### 1. Clone the Repository
```bash
git clone https://github.com/Ahad-Channa/T-A-BakeHouse-Bakery-app.git
cd ta-bakehouse 
```
#### 2. Install Backend Dependencies
- cd server
- npm install
- 
3. Start Backend
- node server

4. Install Frontend Dependencies

- cd ../client
- npm install
  
5. Start Frontend
-npm run dev

Frontend runs on http://localhost:5173
Backend runs on http://localhost:5000


---


## 👨‍💻 Developed By
- Ahad Channa 
- Tasmia-jokhio (https://github.com/Jokhio-Tasmia)
