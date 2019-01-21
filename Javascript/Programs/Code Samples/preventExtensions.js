"use strict"
var myObject = {
    a: 2
};

Object.preventExtensions( myObject );
myObject.b = 3; //we cannot add new property. [In strict mode its an type error]
console.log(myObject.b); //hence it is undefined. 