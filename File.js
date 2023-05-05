const http = require('http');

const routes = require('./Route.js');

const server = http.createServer(routes);

server.listen(3000);