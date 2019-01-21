// When a variable not found in current scope, 
// Engine looks for next higher scope untill it gets its reference or reaches global scope.

function foo(a) {
    return a + b; // b is not found
};

console.log(foo(17));
var b = 20;
console.log(foo(25));


// In the above code, b is not found in foo(), so engine looks at next higher scope
// and it founds b, but at position of function calling, b is not initialized, (so b is assumed as undefined)
// Hence there is no referenceError, instead the result is undefined.