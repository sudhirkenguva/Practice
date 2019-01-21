// The following function is promisified version of fs function

let fileSystem = require('fs');
let fileName = process.argv[2];
let promisifiedFileRead = function(file) {
    return new Promise((resolve, reject) => {
        fileSystem.readFile(fileName, { encoding: 'utf-8' }, (err, content) => {
            if (err) {
                reject(err);
            } else {
                resolve(content);
            }

        });
    })
};


promisifiedFileRead(fileName)
    .then((result) => {
        console.log('File content is \n', result);
    }, (reason) => {
        console.log('Promise rejected:', reason);
    })
    .catch((reason) => {
        console.log('Promise exception:', reason)
    });
console.log('prmisifiedFileRead is called');