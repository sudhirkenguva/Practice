
// PRIMITIVES & THEIR OBJECT COUNTERPARTS (WRAPPER OBJECTS)
// primitives: null, undefined, string, number, boolean
// object counter parts : 
    // string --> String(), number --> Number() , boolean --> Boolean()
// primivites --> have no properties/methods
// objects --> have properties and 
//             each property can be primitive or again a object referece

let a = "Sudhir";
let b = String("Sudhir");
let c = new String("Sudhir");

// console.log("a: "+a+" > typeof(a): "+typeof(a))
// console.log("b: "+b+" > typeof(b): "+typeof(b));
// console.log("c: "+c+" > typeof(c): "+typeof(c));

// // 1.accessing existing properties/methods
// console.log(a.toUpperCase());// console.log((new String(a)).toUpperCase())
// console.log(a.length);
// console.log(c.length);

// // 2.setting new properties/methods 
// a.length = 10;
// a.info = "This is a test info";
// console.log(a.length, a.info);

// c.length = 25;
// c.info = "This is a test info";
// console.log(c.length,c.info);

// console.log(Object.getOwnPropertyDescriptor(c,'length'));
// console.log(Object.getOwnPropertyDescriptor(c,'info'));

// // 3. combining primitives & object wrappers
// c.valueOf = function() {
//     return 'test string';
// }
// let tempStr = c + ' Kumar';
// console.log(tempStr);

// // Numbers
let n1 = 17;
let n2 = Number(17);
let n3 = new Number(17);
console.log(n1.toExponential());
// n3.valueOf = function() {
//     return 1000;
// }
console.log(n3 + 20);