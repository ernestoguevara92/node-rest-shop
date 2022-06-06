const http = require('http');

// Environment variable or default port 3000
const port = process.env.PORT || 3000;

const server = http.createServer();

server.listen(port);