// Create web server
// Create a web server that listens to port 3000. When you open the browser and go to http://localhost:3000, you should see the following message: "Welcome to the main page!"
// Use the comments.js file to write the code for the server.

// Import the 'http' module
const http = require('http');

// Create a server object
const server = http.createServer((req, res) => {
  res.end('Welcome to the main page!');
});

// Listen to the server on port 3000
server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
