// Symbols have debuggability built in (We can console the symbols with their description)
// Symbols can be used as Object keys
// Symbols do not show up on an Object using for in, for of or Object.getOwnPropertyNames 
// the only way to get the Symbols within an Object is Object.getOwnPropertySymbols
// let sym = Symbol('Sudhir Kumar');
// let num = Number(89);
// console.log(sym)
// console.log(num)

//Symbols as data types

let sym1 = Symbol('Ram');
let sym2 = Symbol('Hari');

let obj = {
    name: 'Sudhir',
    [sym1]: 123,
    [sym2]: 456
};

// Prints only name property
for (let v in obj) {
    console.log(v);
}

// We can get all the symbols properties
Object.getOwnPropertySymbols(obj).forEach((v) => {
    console.log(obj[v])
})