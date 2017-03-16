// Reading a file content
let args = require("minimist")(process.argv.slice(2), { string: "file" });
let fileName = args.file;
console.log('The file name is ' + fileName);

let fileModule = require('./file_read_module.js');
let conents = fileModule.readFile(fileName);

console.log("File conents are : ");
console.log(conents);