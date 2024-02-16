const http = require('http');
const fs = require("node:fs");

const server =  http.createServer(function(request, response){
    const html = fs.readFileSync("./index.html", "utf-8");
    response.end(html);
});

server.listen(3000);
console.log('listening localhost:3000')