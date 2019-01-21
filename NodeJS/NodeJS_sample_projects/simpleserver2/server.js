const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');

const mimeTypes = {
    'html':'text/html',
    'css':'text/css',
    'javascript':'text/javascript',
    'jpeg':'image/jpeg',
    'jpg':'image/jpg',
    'png':'image/png'
}; 

const port = 1234;
const host = 'localhost';

var server = http.createServer((req,res)=>{
var uri = url.parse(req.url).pathname;
var filename = path.join(process.cwd(),unescape(uri));
try{
    var stats = fs.lstatSync(filename);
} catch(e) {
    res.writeHead(404,{'Content-type':'text/plain'});
    res.write('404 not found\n');
    res.end();
    return;
}
if(stats.isFile()) {
    var mimeType = mimeTypes[]
}
});

server.listen(port,host,()=>{
    console.log(`server is listening @ ${host}:${port}`);
})