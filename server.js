const http = require('http');
const fs = require("node:fs");
const url = require("url");

const server =  http.createServer(function(request, response){
    let pathname = url.parse(request.url).pathname

    response.writeHead(200)

    if (pathname == "/") {
        html = fs.readFileSync("./index.html", "utf-8");
        response.write(html)
    } else if (pathname == "/bTree.js") {
        script = fs.readFileSync("./js-homework/bTree.js", "utf-8");
        response.write(script)
    } else if (pathname == "/list.js") {
        script = fs.readFileSync("./js-homework/list.js", "utf-8");
        response.write(script)
    }
    response.end();
});


server.listen(3000);
console.log('listening localhost:3000')