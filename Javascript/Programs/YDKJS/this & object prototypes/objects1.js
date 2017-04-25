// In object literals, quotes for sorrounding keys are optional.
// They only require when we have multi-word keys.

let bottle = {
    'color': 'green',
    'price': 60,
    'oh-my-God!\u00B5': 2999
};

let bottle2 = {
    color: 'red',
    'retail price': 40
};

console.log(bottle["oh-my-God!"]);
console.log(bottle)
console.log(bottle2)

console.log(typeof bottle) // 'object'
console.log(typeof undefined) // 'undefined'
console.log(typeof null) // output is 'object' but null is not object type (REMEMBER)
console.log(typeof 45) // number
console.log(typeof 'India') // string
console.log(typeof [10, 20, 30]) // object (arrays are object subtypes)