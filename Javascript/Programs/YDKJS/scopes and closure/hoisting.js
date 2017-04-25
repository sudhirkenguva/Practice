// snippet 1

// {
//     console.log(i);
//     i = 5;

// }
// let i;

// snippet 2
// a = 2;

// var a;

// console.log(a);

// snippet 3

// foo(); // type error (because foo is defined but it is undefined, function call on undefined is typeError (illegal operation on undefined))

var foo = function bar() {
    console.log('Hi');
};

foo();