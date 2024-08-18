# UNCLO E-Commerce Platform

## Introduction

UNCLO is a demo e-commerce platform developed to showcase the integration of MongoDB, Express.js, React.js, and Node.js. The project aims to provide a hands-on learning experience in full-stack development.

## Key Features

- **MERN Stack Implementation:** Demonstrates the use of MongoDB, Express.js, React.js, and Node.js for building a full-stack application.

- **Frontend Development:**
  - **Dynamic React Components:** Features interactive and reusable UI components.
  - **React Context API:** Used for managing global state across components.

- **Backend Development:**
  - **RESTful APIs:** Created with Express.js for handling user authentication, product management (CRUD operations), and cart management.
  - **Secure Authentication:** Uses JWT-based authentication and bcrypt for password hashing.
  - **Modular Architecture:** Organized backend code into modular components, enhancing the project’s scalability and ease of extension. This structure includes separate directories for controllers, models, routes, and middleware, which allows for straightforward addition of new features and maintenance of existing ones.

- **Database Integration:**
  - **MongoDB with Mongoose:** Manages schemas for efficient data handling.
  - **Image Upload Handling:** Utilizes multer for handling image uploads.


## Limitations
- **Demo Purpose:** The project serves primarily as a learning tool and may not be fully functional or production-ready.

## How to Run the Project

1. **Run the Client Server:**
   ```bash
   cd client
   npm i
   npm start
2. **Run the Admin Server:**
   ```bash
   cd admin
   npm i
   npm run dev
3. **Run the Backend Server:**
   ```bash
   cd server
   npm i
   node main.js

 ## Project Structure
 ```
└── 📁UNCLO
    └── 📁admin
        └── 📁public
            └── vite.svg
        └── 📁src
            └── 📁components
                └── 📁Addproduct
                    └── Addproduct.css
                    └── Addproduct.jsx
                └── 📁Listproduct
                    └── Listproduct.css
                    └── Listproduct.jsx
                └── 📁Navbar
                    └── Navbar.css
                    └── Navbar.jsx
                └── 📁Sidebar
                    └── Sidebar.css
                    └── Sidebar.jsx
            └── 📁Pages
                └── 📁Admin
                    └── Admin.css
                    └── Admin.jsx
            └── App.css
            └── App.jsx
            └── main.jsx
    └── 📁client
        └── 📁public
            └── index.html
            └── logo.png
            └── manifest.json
            └── robots.txt
        └── 📁src
            └── 📁components
                └── 📁Assets
                └── 📁Breadcrum
                    └── Breadcrum.css
                    └── Breadcrum.jsx
                └── 📁CartItems
                    └── CartItems.css
                    └── CartItems.jsx
                └── 📁Footer
                    └── Footer.css
                    └── Footer.jsx
                └── 📁Hero
                    └── Hero.css
                    └── Hero.jsx
                └── 📁Item
                    └── Item.css
                    └── Item.jsx
                └── 📁Navbar
                    └── Navbar.css
                    └── Navbar.jsx
                └── 📁NewCollections
                    └── NewCollection.css
                    └── NewCollection.jsx
                └── 📁NewsLetter
                    └── NewsLetter.css
                    └── NewsLetter.jsx
                └── 📁Offer
                    └── Offer.css
                    └── Offer.jsx
                └── 📁Popular
                    └── Popular.css
                    └── Popular.jsx
                └── 📁ProductDisplay
                    └── ProductDisplay.css
                    └── ProductDisplay.jsx
                └── 📁RelatedProducts
                    └── RelatedProducts.css
                    └── RelatedProducts.jsx
            └── 📁context
                └── ShopContext.jsx
            └── 📁pages
                └── 📁CSS
                    └── Login.css
                    └── ShopCategory.css
                    └── SignUp.css
                └── Cart.jsx
                └── Home.jsx
                └── Login.jsx
                └── Product.jsx
                └── ShopCategory.jsx
                └── SignUp.jsx
            └── App.css
            └── App.js
            └── App.test.js
            └── index.css
            └── index.js
            └── reportWebVitals.js
            └── setupTests.js
        └── .gitignore
        └── package-lock.json
        └── package.json
        └── README.md
    └── 📁server
        └── 📁config
            └── db.js
        └── 📁controllers
            └── authControllers.js
            └── cartControllers.js
            └── productControllers.js
        └── 📁middleware
            └── authMiddleware.js
            └── imageUploadMiddleware.js
        └── 📁models
            └── productModel.js
            └── userModel.js
        └── 📁routes
            └── authRoutes.js
            └── cartRoutes.js
            └── productRoutes.js
        └── 📁upload
            └── 📁images
        └── .env
        └── main.js
        └── package-lock.json
        └── package.json
```
 
## Languages & Tools

- **Frontend Development:**
  - ![React](https://img.icons8.com/color/48/000000/react-native.png) React
  - ![HTML](https://img.icons8.com/color/48/000000/html-5.png) HTML
  - ![CSS](https://img.icons8.com/color/48/000000/css3.png) CSS

- **Backend Development:**
  - ![Node.js](https://img.icons8.com/color/48/000000/nodejs.png) Node.js
  - ![Express.js](https://img.icons8.com/ios-filled/50/000000/express-js.png) Express.js
  - ![JavaScript](https://img.icons8.com/color/48/000000/javascript.png) JavaScript

- **Database:**
  - ![MongoDB](https://img.icons8.com/color/48/000000/mongodb.png) MongoDB
  - ! Mongoose

  


  




