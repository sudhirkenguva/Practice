// We know that, for in will iterate through keys of an object.

let names = ['Ram', 'Hari', 'Gopal'];
for (let key in names) {
    console.log(key);
};

console.log(Object.getOwnPropertyNames(names));
console.log(Object.getOwnPropertyDescriptor(names, "length"));