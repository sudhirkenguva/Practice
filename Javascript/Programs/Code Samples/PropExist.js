var myObject = {
    a: 2
};

console.log(("a" in myObject));              // true
console.log(("b" in myObject));              // false

console.log(myObject.hasOwnProperty( "a" )); // true
console.log(myObject.hasOwnProperty( "b" )); // false