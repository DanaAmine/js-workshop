# JavaScript Learning Tasks

## Task 1: Variable Manipulation and Control Flow

- [ ] **Description:** Write a JavaScript program that takes a number as input from the user and checks whether it's even or odd. If it's even, print "The number is even", otherwise print "The number is odd".

## Task 2: Arrays and Loops

- [ ] **Description:** Create an array of numbers. Write a function that takes this array as input and returns the sum of all the numbers in the array.  ( map or reduce not for loop hh)

## Task 3: Functions and Objects

- [ ] **Description:** Create an object representing a car. It should have properties such as make, model, year, and color. Write a function that takes this car object as input and prints out a description of the car.(arrow function not simple)

## Task 4: Asynchronous Programming with Callbacks

- [ ] **Description:** Write a function that simulates fetching data from a server. Use setTimeout to mimic a delay. The function should take a callback function as a parameter and invoke the callback with some dummy data after a certain delay.

## Task 5: Promises

- [ ] **Description:** Extend the previous task to use promises instead of callbacks. Rewrite the function to return a promise that resolves with the dummy data after a delay. Then, use .then() to handle the resolved promise and print the data.
<br/><br/><br/><br/><br/>
# Task 6 : Recipe Sharing Platform

Welcome to the Recipe Sharing Platform project! In this project, you will be building a platform for sharing and discovering recipes. Users will be able to create, share, and search for recipes. MongoDB will be used to store recipe data, and Express.js will be used to create API endpoints for managing recipes.

## Project Overview

The goal of this project is to create a platform where users can share their favorite recipes with others. Users will be able to create new recipes, view existing recipes, search for recipes by name or ingredients, and interact with recipes by liking or commenting on them.

## Tasks

1. **Set up Express.js Server:**
    - Create a basic Express.js server that listens on a specified port.

2. **Connect to MongoDB:**
    - Set up a connection to MongoDB using the `mongoose` library.

3. **Create a Schema:**
    - Define a schema for a MongoDB collection to represent recipes. Include fields such as title, description, ingredients, instructions, author, likes, and comments.

4. **Create API Routes:**
    - Create API routes for CRUD operations (Create, Read, Update, Delete) for recipes.
        - `GET /recipes` to fetch all recipes
        - `POST /recipes` to create a new recipe
        - `GET /recipes/:id` to fetch a specific recipe by ID
        - `PUT /recipes/:id` to update a specific recipe by ID
        - `DELETE /recipes/:id` to delete a specific recipe by ID

5. **Implement CRUD Operations:**
    - Implement the logic for CRUD operations in the corresponding API routes using Mongoose methods.

6. **Implement Search Functionality:**
    - Create an API endpoint for searching recipes by name or ingredients.

7. **Implement Like and Comment Functionality:**
    - Add endpoints to allow users to like or comment on recipes.

8. **Test API Endpoints:**
    - Test each API endpoint using tools like Postman or by making HTTP requests from your frontend.

9. **Error Handling:**
    - Implement error handling middleware to catch and handle errors that occur during API requests.

10. **Validation:**
    - Implement validation middleware to validate incoming request data (e.g., ensure required fields are present).

11. **Deployment (Optional):**
    - Deploy your Express.js server and MongoDB database to a cloud platform like Heroku and MongoDB Atlas.

## Getting Started

1. Clone this repository to your local machine.
2. Install dependencies using `npm install`.
3. Set up a MongoDB database either locally or on a cloud platform.
4. Start the Express.js server
<br/><br/><br/><br/><br/>


# Task 7 : Ecommerce Website Project

Welcome to the Ecommerce Website Project! In this project, you will be building a fully functional eCommerce website using React for the frontend, MongoDB for the database, and Express for the backend. This project will help you enhance your skills in full-stack web development.

## Project Overview

The goal of this project is to create an eCommerce website where users can browse products, add them to their cart, make purchases, and manage their account. The website should have the following features:

- [ ] User authentication and authorization (sign up, login, logout)
- [ ] Browse products with pagination
- [ ] Search functionality to find products
- [ ] Product details page
- [ ] Add products to cart
- [ ] Cart management (update quantity, remove items)
- [ ] Checkout process
- [ ] User account management (view orders, update profile)
- [ ] Admin panel for managing products, orders, and users (CRUD operations)

## Technologies Used

- **Frontend**: React.js
- **Backend**: Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Styling**: CSS or styled-components

## Tasks

### Frontend Tasks

1. [ ] Set up the React project structure.
2. [ ] Implement user authentication (sign up, login, logout) using JWT.
3. [ ] Create pages/components for browsing products, product details, and cart.
4. [ ] Implement functionality to add/remove products from the cart.
5. [ ] Develop the checkout process.
6. [ ] Create user account management pages (view orders, update profile).
7. [ ] Implement search functionality to find products.
8. [ ] Ensure responsive design for different screen sizes.
9. [ ] Integrate any additional libraries or components as needed.

### Backend Tasks

1. [ ] Set up the Express.js project structure.
2. [ ] Implement RESTful APIs for user authentication (sign up, login, logout).
3. [ ] Create APIs for browsing products with pagination.
4. [ ] Develop APIs for managing the cart (add/remove items, update quantity).
5. [ ] Implement the checkout process (create orders, update product quantities).
6. [ ] Create APIs for user account management (view orders, update profile).
7. [ ] Implement admin functionalities for managing products, orders, and users.
8. [ ] Ensure proper error handling and validation for API requests.
9. [ ] Secure APIs using JWT authentication and authorization.

### Database Tasks

1. [ ] Design the MongoDB database schema for users, products, orders, and cart.
2. [ ] Set up MongoDB and connect it to your Express.js application.
3. [ ] Implement database CRUD operations for users, products, orders, and cart.

## Getting Started

1. [ ] Clone this repository to your local machine.
2. [ ] Install dependencies for both frontend and backend.
3. [ ] Set up the MongoDB database.
4. [ ] Start the backend server.
5. [ ] Start the frontend server.
6. [ ] Begin implementing the tasks outlined above.

## Submission

Once you have completed the tasks, create a pull request to the main repository. Include a summary of the work done, any challenges faced, and lessons learned during the project.

Feel free to reach out if you have any questions or need clarification on any task. Happy coding!
