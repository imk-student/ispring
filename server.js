const http = require('http');

const server =  http.createServer(function(request, response){
    response.end("qq");
});

server.listen(3000);
console.log('listening localhost:3000')