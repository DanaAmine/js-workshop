// Create a file named app.js
// Load the HTTP module
const http = require('http');

// Configure HTTP server to respond with "Hello, World!" to all requests
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'}); // a9ray 3la headers
    
    res.end('Hello, World!\n');
});

// Listen on port 3000 by default
server.listen(3000, () => {
    console.log(`Server running at http://localhost:${3000}/`);
});
