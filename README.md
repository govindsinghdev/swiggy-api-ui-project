# 🍔 React Food Listing App

## 📌 Overview

This is a responsive Food Listing Web Application built using React.js. The application demonstrates routing, reusable components, dynamic data rendering, and form validation.

The project is designed as a practice application to showcase frontend development skills for interview purposes.

---

## 🚀 Features

### 🏠 Home Page

* Displays introductory content with dummy text
* Shows **4 food items** (limited view)
* Each item includes:

  * Image
  * Name
  * Cuisine
  * Rating
  * Delivery time (mins)

---

### ℹ️ About Page

* Static page with dummy content
* Used to demonstrate routing and page structure

---

### 🛠 Services Page

* Displays **all food listing items**
* Data is dynamically rendered from a local `data.json` file
* Reuses the same component used in Home page

---

### 📞 Contact Page

* Includes dummy content
* Contains a **Contact Form** with:

  * Name
  * Email
  * Contact Number
  * Message (textarea)
* Form includes **basic validation**

  * Required fields
  * Email format validation
  * Contact number validation

---

## 🧠 Key Concepts Used

* React Functional Components
* React Hooks (`useState`, `useEffect`)
* React Router DOM (Routing)
* Reusable Components
* Conditional Rendering
* Controlled Forms & Validation
* Dynamic Data Rendering (JSON)

---

## 🛠 Tech Stack

* React.js
* JavaScript (ES6+)
* HTML5
* CSS3
* React Router DOM

---

## 📂 Project Structure

```
src/
  components/
    Header.js
    Footer.js
    BodyLayout.js
  pages/
    About.js
    Services.js
    Contact.js
  utils/
    data.json
  App.js
```

---

## ▶️ Getting Started

### 1. Install dependencies

```
npm install
```

### 2. Run the app

```
npx parcel index.html
```

### 3. Build for production

```
npm run build
```

---

## 📸 Screenshots

(Add screenshots of your Home, Services, and Contact pages here)

---

## 🔗 Live Demo

(Add your Netlify/Vercel deployed link here)

---


## 👨‍💻 Author

Govind Singh
Frontend Developer (React.js)

---

## ⭐ Purpose

This project is created for learning and interview preparation to demonstrate frontend development skills.
