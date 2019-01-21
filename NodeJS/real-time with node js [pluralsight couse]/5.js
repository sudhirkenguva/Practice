// Reading a file content asynchronously [non blocking way]
let args = require("minimist")(process.argv.slice(2), { string: "file" });
let fileName = args.file;
console.log('The file name is ' + fileName);

let fileModule = require('./file_async_read');
//its error first callback
let contents;
fileModule.fileAsyncRead(fileName, function(err, res) {
    if (err) {
        console.error("Error --> " + err)
    } else {
        contents = res;

        console.log("File conents are : ");
        console.log(contents);
    }

});