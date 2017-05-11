let http = require('http');

let server = http.createServer(function(req, res) {
    res.end('Hi I am node server :)')
});

server.listen(1000);
console.log('server is running @ localhost:1000');