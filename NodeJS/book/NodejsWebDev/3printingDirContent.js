let fs = require('fs');
let files = fs.readdirSync('..'); // returns directory content as an array
console.log(files);