## 🧾 Customer Management App
A beginner-friendly React + Django REST Framework project to manage customers. This project allows users to create, view, and search customer records from a React frontend connected to a Django REST API backend.

## ✨ Project Goals
This project is designed as a learning tool for students who are new to:

React fundamentals and hooks

Building forms and handling inputs

React Router navigation

Using Axios for HTTP requests

Connecting React with a backend API

Building user interfaces with Bootstrap

Structuring a full-stack application

## 🛠 Technologies Used
🔹 Frontend (React)
React with functional components

React Router DOM

Axios

Bootstrap for styling

React Icons

# 🔹 Backend (Django)
Django REST Framework (API)

SQLite (default DB)

django-cors-headers (for handling CORS)

📂 Features
✅ View all customers

✅ Search customers by name

✅ Add a new customer with validation

✅ View individual customer profiles

✅ Easy sidebar navigation


## 📁 Folder Structure
bash
Copy
Edit
src/
├── components/
│   ├── Customers.js         # Customer list + search
│   ├── CreateCustomer.js    # Form to add new customers
│   ├── CustomerProfile.js   # View individual customer details
│   └── SideNav.js           # Sidebar navigation
├── App.js                   # Route configuration
├── index.js                 # React entry point
## 🔧 How to Run the Project
✅ Prerequisites
Node.js & npm

Django backend running (see Backend section)

## ▶️ Frontend Setup
bash
Copy
Edit
git clone https://github.com/your-username/customer-management-app.git
cd customer-management-app
npm install
npm start
The React app will start on http://localhost:3000.

## 🛠 Backend Setup (API)
Ensure your Django backend:

Has a Customer model with fields:

json
Copy
Edit
{
  "name": "Juliet",
  "email": "juliet@example.com",
  "phone_number": "0715747022",
  "city": "Harare",
  "total_spent": "0.00",
  "date_joined": "2025-05-14",
  "days_spent": "10.00"
}
Exposes API endpoints like /api/customers/ and /api/customers/<id>/

Has CORS enabled with django-cors-headers

## 📚 Educational Notes for Students
You’ll learn how data flows between components using props and state

You'll see how to bind form inputs to component state

You’ll practice how to make GET and POST requests to a backend

You’ll learn how to create reusable UI elements like SideNav

You can customize and extend this project with update and delete features

## 🚀 Ideas to Extend This Project
Add "Edit" and "Delete" functionality

Add pagination or sorting to the customer list

Add user authentication (login/logout)

Use React Context or Redux for global state management

Add a dashboard with stats (e.g., total customers, total spent)

## 🙋‍♂️ Author / Maintainer
Created as a teaching resource by [Leeroy Kwashire].
