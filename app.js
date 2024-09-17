
import http from 'http';

// Create a server object
const server = http.createServer((req, res) => {
	// Set the response header
	res.writeHead(200, {'Content-Type': 'text/plain'});
	// Write some text to the response
	res.end('Welcome to my simple Node.js app!');
});

// Define the port to listen on
const port = 3000;

// Start the server
server.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});

// setup my socket server
var io = require('socket.io')(http);
 
io.on('connection', function(socket) {
    console.log('new connection');

    // Called when the client calls socket.emit('move')
    socket.on('move', function(msg) {
       socket.broadcast.emit('move', msg); 
    });
});     