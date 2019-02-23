// Variable no. of function arguments
// Hey coders!! Today will discuss about writing a javascript function which 
// can take variable number of arguments, while writing the function we dont have to 
// mention whole set of formal arguments
// Instead the arguments will be inferred from function calling.
// Lets see how javascript handles this. 
// Lets first checkout a simple use case for better understanding 
// and later we can focus on further details

// Lets write a function for finding sum of given numbers

// function add() {
//     var sum = 0;
//     for(var i = 0; i < arguments.length; i++) {
//         sum += arguments[i];
//     }
//     return sum; 
// }
// console.log(add());
// console.log(add(1));
// console.log(add(1,2));
// console.log(add(1,2,3));
// console.log(add(1,2,3,4));

// ==============================================================
// From es6 onwards we have rest parameters syntax available
function add(...values) {
    var sum = 0;
    for(var i = 0; i < values.length; i++) {
        sum += values[i];
    }
    return sum;
}
console.log(add());
console.log(add(1));
console.log(add(1,2));
console.log(add(1,2,3));
console.log(add(1,2,3,4));
