# 🚀 Blog Backend API

## 📌 Project Description

This is a **Blog Backend System** built using Node.js, Express, and MySQL.
It provides APIs for user authentication, blog creation, and commenting.

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MySQL
* JWT Authentication
* Postman (API Testing)

---

## ✨ Features

* User Registration & Login 🔐
* JWT Authentication 🛡️
* Create Blog 📝
* View Blogs 📖
* Add Comments 💬
* Secure Protected Routes

---

## 📂 Project Structure

```
config/
controllers/
middleware/
routes/
app.js
package.json
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```
git clone https://github.com/Praveenverma296/blog-backend.git
```

### 2. Navigate to project

```
cd blog-backend
```

### 3. Install dependencies

```
npm install
```

### 4. Setup environment variables (.env)

```
PORT=5000
JWT_SECRET=your_secret_key
```

### 5. Setup MySQL Database

Create a database named:

```
blog_db
```

### 6. Run the server

```
node app.js
```

---

## 🔗 API Endpoints

### 🔐 Auth Routes

* POST `/api/auth/register` → Register user
* POST `/api/auth/login` → Login user

### 📝 Blog Routes

* POST `/api/blogs` → Create blog (Protected)
* GET `/api/blogs` → Get all blogs
* GET `/api/blogs/:id` → Get single blog
* DELETE `/api/blogs/:id` → Delete blog (Protected)

### 💬 Comment Routes

* POST `/api/comments` → Add comment (Protected)
* GET `/api/comments/:blog_id` → Get comments

---

## 🧪 API Testing

All APIs were tested using Postman.

---

## 👨‍💻 Author

**Praveen Verma**

---

## 📌 Future Improvements

* Blog update feature
* Like/Dislike system
* Pagination
* Search functionality
* Image upload

---
