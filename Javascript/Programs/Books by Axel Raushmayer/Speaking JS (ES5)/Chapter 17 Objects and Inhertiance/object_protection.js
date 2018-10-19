
let a = {
    name: 'Sudhir'
};

// Object.preventExtensions(a); // new props cant be added

// a.age = 25; // in sloppy mode it silently fails and in strict mode it gives error

// a.name='Sudhir Kumar';

// Object.seal(a); // new props cant be added and existing props cant be re-configured.
// a.name='Sudhir Kumar';
// console.log(Object.getOwnPropertyDescriptor(a,'name'));
// console.log(a);

console.log(Object.freeze(a));
console.log(Object.getOwnPropertyDescriptor(a,'name'));