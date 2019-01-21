// // ASI (AUTOMATIC SEMICOLON INSERTION)
// // 1. when there is a line separator (new line) followed by illegal token
//     let a = 25 
//     console.log(a);

// // 2. end of the block or file.

// if(a < 50) {
//     console.log(a);
// }

// Dangers
// 1. When there is any return statement followed by new line
let demo = function() {
    return {
        name:'Sudhir'
    }
}

console.log(demo());

// 2
{
    name:'Sudhir'
}
[75].forEach((item) => {
    console.log(item);
})
