/*
Javascript Arrays
there are 3 properties:
    -- Array.length
    -- Array.prototype
    -- Array.prototype[@@unscoppable] [To be read later]
*/

// Array.length
let a = ['Ram', 'Hari', 'Gopal', 'Venu', 'Madhav'];
console.log(a.length); // last element of array
let lastElement = a[a.length - 1]
console.log(lastElement)

//Array.length can be used to shorten the array
let b = ['Rama Krishna', 'Vivekananda', 'Buddha', 'Jesus']

if (b.length > 2) {
    b.length = 2
}
console.log(b);
console.log('New length:' + b.length);

/* 
Array.prototype represents the prototype of constructor of 'Array' class
It allows to add new properties and methods to all Array objects
As all array instances inherit the Array.prototype object, when we add any method or 
property to Array.property, it will be available to all the arrays
*/

/*
lets say we will add one method 'firstElement()' which is not available by default 
to array.prototype and it will be available to all the arrays.
*/

if (Array.prototype.firstElement === undefined) {
    Array.prototype.firstElement = function() {
        return this[0];
    }
}

let c = ['India', 'America', 'Russia', 'China', 'Japan']
console.log('First Element is ' + c.firstElement())

let d = [true, false, undefined, null]
console.log('First Element is ' + d.firstElement())