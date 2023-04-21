const http = require('http');

const server = http.createServer(function(req,res){
   console.log(req.url, req.method, req.headers);

   if(req.url=='/home'){
   res.setHeader('Content-Type','text/html');
   res.write('<html>');
   res.write('<head><title>My first Page</title></head>');
   res.write('<body><h1>Welcome Home</h1></body>');
   res.write('</html>');
   res.end();
   }
   else if(req.url=='/about'){
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My first Page</title></head>');
    res.write('<body><h1>Welcome To About Us Page</h1></body>');
    res.write('</html>');
    res.end();
   }
   else if(req.url=='/node'){
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My first Page</title></head>');
    res.write('<body><h1>Welcome To My Nodejs Project</h1></body>');
    res.write('</html>');
    res.end();
   }
   else{
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My first Page</title></head>');
    res.write('<body><h1>Hello from my Node.js server</h1></body>');
    res.write('</html>');
    res.end();
   }

});

server.listen(3000);