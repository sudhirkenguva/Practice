// function expressions (anonymous functions) can be written as arrow functions

let a = [1,2,3,4,5,6];

let sum = 0;
a.forEach(item => sum += item);
console.log(`Sum of array elements is ${sum}`);

let newArr = a.map(item => item * 2);
console.log(`New array is: ${newArr}`);