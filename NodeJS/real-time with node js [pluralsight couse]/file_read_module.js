let readFile = function(file) {
    //The following function returns the file content (asynchronousely) [blocking way]
    return fs.readFileSync(file, 'UTF8');
}

let fs = require("fs");

module.exports.readFile = readFile;