let obj = {
    name: 'Sample name'
}

let protoObj = {
    name: 'Proto name',
    age: 'proto age'
};

Object.setPrototypeOf(obj, protoObj);


console.log('in operator (Used to test a prop exists in its prototype chain or not)');
console.log('age' in obj); // true
console.log('sal' in obj);
debugger;
console.log('hasOwnProperty used to test a prop exists directly in the object or not');
console.log(obj.hasOwnProperty('age')); // false