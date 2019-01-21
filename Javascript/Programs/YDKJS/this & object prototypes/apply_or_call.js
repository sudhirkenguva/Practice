// Applications of apply/call

// We can re-use the functions of Arrays/Strings 

let arrayLikeObj = {
    0: 'Ram',
    1: 'Hari',
    2: 'Venu',
    3: 'Gopal',
    length: 4
};

let temp = Array.prototype.join.apply(arrayLikeObj, ['>>>', '<<<']); // apply() takes all the parameters in a single array.
let temp2 = Array.prototype.join.call(arrayLikeObj, '>>>'); // call() takes all the parameters individually
console.log(temp);
console.log(temp2);

// Math.max() can take any number of individual arguments
console.log(Math.max(10, 20, 30, 40));

// But when we have already an array of numbers
// we cannot pass that array to Math.max
let arrNum = [10, 20, 30, 40];
console.log(Math.max(arrNum)); // Invalid result: NaN

// in this case our apply() will help (as it takes all the arguments as single array)
console.log(Math.max.apply(null, arrNum)); // 40 (Yes)