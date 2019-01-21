let http = require('http')
http.createServer(function(request, response) {

    //send 
    //response code as 200 (OK), content-type as text

    response.writeHead(200, { 'content-type': 'text/plain' });
    response.end('Welcome to Node');
}).listen(8081);

console.log('Server listening at port no. 8081');