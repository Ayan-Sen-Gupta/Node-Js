const http = require('http');

const server = http.createServer((req,res) => {
      console.log('Ayan');
})

server.listen(4000);