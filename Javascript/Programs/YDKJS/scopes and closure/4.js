// There are many ways to avoid name collisions:
//  like: declaring our variables and methods inside a function/ object / module

let a = 55;

(function foo() {
    let a = 90;
    console.log('a inside myFun', a);
})(); //iife

console.log('a outside myFun', a);


(function(a, b) {
    console.log('Sum of %d & %d is %d', a, b, a + b);
})(5, 6);