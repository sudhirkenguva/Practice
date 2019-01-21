// "use strict"
let college = {
    name: 'GICMS',
    addr: 'Gunupur'
};

// When we call prevent extension, new properties cannot be added.

Object.preventExtensions(college);

college.estd = 1989; // silently ignored, in strict mode , its an error

console.log(college);

// but we can remove

delete college.addr;
console.log(college);

let book = {
    title: 'Let us C',
    price: 150,
    author: 'Yeshwant Kanetkar'
};

console.log('seal is called');
Object.seal(book); // new props cannot be added and all props become configurable false

console.log(Object.getOwnPropertyDescriptor(book, "title"));
console.log(Object.getOwnPropertyDescriptor(book, "price"));
console.log(Object.getOwnPropertyDescriptor(book, "author"));

console.log()
Object.freeze(book);