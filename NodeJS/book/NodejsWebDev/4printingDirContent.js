// We can use command line arguments.
let fs = require('fs');
let dir = process.argv[2] || '.'; //When no ragument is supplied, contents of current directory is showed.

let dirContent = fs.readdirSync(dir);

dirContent.forEach((element, index) => {
    console.log(element, index);
})