const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Route handler for GET request
app.get('/', (req, res) => {
    res.send('GET request received');
    console.log("running from maroua");
    
});

// Route handler for POST request
app.post('/', (req, res) => {
    console.log('POST body:', req.body);
    res.send('POST request received');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
