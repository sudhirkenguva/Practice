// automatic semicolon insertion 
//1. a line terminator (new line) followed by illegal token
// let a = 10 
// console.log(a);

// //2. before closing brace
// if(a == 10) {
//     console.log('value is 10');
// }

// 3. at the end of file.

// Dangers of ASI.
// sometimes ASI breaks
function demo () {
    return {
        name:'Sudhir'
    }
}

demo();
['One','Two'].forEach(element => {
    console.log(element);
});

