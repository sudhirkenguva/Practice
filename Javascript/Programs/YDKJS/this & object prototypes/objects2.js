// automatic type casting of literal values to corresponding object types
// Js engines performs only for string, number and boolean types

let primitiveStr = "I love India";
let len = primitiveStr.length;

// here the string 'I love india' is not an instance of String object, but it is type casted to it.
console.log(primitiveStr instanceof String); //false
console.log(typeof primitiveStr); // string (not String)

console.log(len);

let primitiveNum = 56.87655;
console.log(primitiveNum.toFixed(2));