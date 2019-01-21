// Call back version of fs (which in in-built )
let fileSystem = require('fs');
let fileContent = null;
fileSystem.readFile(process.argv[2], { encoding: 'utf-8' }, (err, content) => {
    if (!err) {
        fileContent = content;
    }
    console.log('File content is --->\n', fileContent);
});