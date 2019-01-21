let http = require("http")
let server = http.createServer((request, response) => {
    response.writeHead(200, { "content-typ": "text/plain" })
    response.end("Welcome to node")
})
server.listen(8765)
console.log('Node server listening at : http://localhost:8765/')