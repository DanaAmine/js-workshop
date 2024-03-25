const express = require('express');
const app = express();
const Routes = require('./MyAppRoutes/routes');

// Middleware to parse JSON bodies
app.use(express.json());

// Route handler for GET request
app.use('/', Routes);


// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
