let fileAsyncRead = function(file, cb) {
    return fs.readFile(file, "UTF8", cb);
}

let fs = require("fs");

module.exports.fileAsyncRead = fileAsyncRead;