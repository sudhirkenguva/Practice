// lets check mutability

// Objects are mutable.

let obj3 = {name:"Sudhir"};

obj3.age = 27;

console.log(obj3);

obj3.name = "Sudhir Kumar K";
console.log(obj3);

// Primitive values are immutable.
let msg = 'Good Morning!!';
console.log(msg.length);

msg.length = 85; // no effect, still length is 14
console.log(msg.length);


msg.purpose = "Greeting";
console.log(msg.purpose);

console.log(msg);
