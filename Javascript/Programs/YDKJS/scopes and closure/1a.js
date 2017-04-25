// When we store a reference of a function into a variable, 
// The name of the function is not available in the current scope, 
// so we cant call that function with its name, we must have to call with the LHS variable name
// (So it is always better to use anonymous function at the right side of assignment)
let myFun = function sum() {
    console.log('Great!!! I am here');
}

myFun(); // works
sum(); // Error : 'sum' is not defined

// always use anonymous functions at the right side of assignment