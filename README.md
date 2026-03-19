#  Student Task & Assignment Manager

A full-stack web application designed to help students manage their tasks, assignments, and deadlines efficiently. The system provides a modern user interface with real-time data handling using a React frontend and PHP backend.

---

#  Features

*  User Authentication (Register / Login / Logout)
*  Dashboard with task statistics
*  Task Management (Add, Edit, Delete, View)
*  Assignment Management
*  Search and Filter Tasks
*  Dark / Light Mode
*  Responsive Mobile Design
*  Export Tasks as JSON
*  Full Backend Integration (API + Database)

---

# 🛠️ Technologies Used

## Frontend

* React.js (SPA)
* HTML5
* CSS3
* JavaScript (ES6)
* React Router
* React Icons

## Backend

* PHP (REST API)
* MySQL Database

## Tools

* Git & GitHub (Version Control)
* Postman (API Testing)
* XAMPP (Local Server)
* VS Code (Editor)

---

#  Project Structure

```
project-root/
│
├── frontend/              # React Application
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── utils/api.js
│
├── student-manager-api/   # PHP Backend
│   ├── auth/
│   ├── tasks/
│   ├── assignments/
│   ├── db.php
│   └── test.php
```

---

#  Installation & Setup Guide

## Step 1: Install Required Software

### 1. Install XAMPP

Download: https://www.apachefriends.org
Install and open XAMPP Control Panel.

### 2. Install Node.js

Download: https://nodejs.org (LTS version)

### 3. Install VS Code (Optional)

Download: https://code.visualstudio.com

---

## Step 2: Setup Backend

### Start Server

* Open XAMPP
* Start:

  * Apache
  * MySQL 

---

### Place Backend Files

Copy folder:

```
student-manager-api
```

Into:

```
C:\xampp\htdocs\
```

---

### Create Database

1. Open:

```
http://localhost/phpmyadmin
```

2. Create database:

```
student_manager
```

---

### Create Tables

Run this SQL:

```sql
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  password VARCHAR(255)
);

CREATE TABLE tasks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  title VARCHAR(255),
  description TEXT,
  deadline DATE,
  status VARCHAR(50)
);

CREATE TABLE assignments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  subject VARCHAR(100),
  title VARCHAR(255),
  due_date DATE,
  status VARCHAR(50)
);
```

---

### Test Backend

Open:

```
http://localhost/student-manager-api/test.php
```

You should see:

```
Database connected successfully!
```

---

## Step 3: Setup Frontend

1. Open terminal inside frontend folder

2. Install dependencies:

```bash
npm install
```

3. Start project:

```bash
npm start
```

4. Open in browser:

```
http://localhost:3000
```

---

# Running the Application

Make sure:

| Service | Status    |
| ------- | --------- |
| Apache  |  Running |
| MySQL   |  Running |
| React   |  Running |

---

#  How to Use

1. Register a new user
2. Login
3. Add tasks
4. Manage assignments
5. View dashboard

---

# Common Issues & Fix

## CORS Error

If you see error:

> Blocked by CORS policy

Add this at the top of all PHP files:

```php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
```

---

# Project Architecture

This project follows **Single Page Application (SPA)** architecture:

* React handles UI
* PHP handles API
* MySQL stores data

Frontend communicates with backend using HTTP requests (JSON).

---

# Version Control

All code is managed using GitHub with multiple commits showing project progress.

---

