//Number data type available both in js & ts but ts has octal and binary literal

var a:number =20;
var decimal: number = 6;
var hex: number = 0xf00d;
var binary: number = 0b1010;
var octal: number = 0o744;

console.log(a);
console.log(decimal);
console.log(hex);
console.log(binary);
console.log(octal);

//template Strings and embeded expressions
let fullName: string = `Bob 
Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName }.

I'll be ${ age + 1 } years old next month.` ;

// Arrays
let list: number[] = [1, 2, 3];

console.log(list);


// Declare a tuple type
//datatypes of 1st 2 elements of tupe is string & number, further numbers can be of any type
let x: [string, number]; 
// Initialize it
x = ["Hello",55]; // OK

console.log(x);
console.log(x[0].length); //OK
// console.log(x[1].length); //Error!! length of number is undefined

//Enums (by default members take values from 0)

enum color {red,green,blue};

var  z:color=color.green;

console.log('+++++++'+z+'++++++++');

// We can manually submit values


enum dept {eee=5,ie,cse};

var  b:dept=dept.cse;

console.log('+++++++'+b+'++++++++');

//We can also print the enum member name using enum index

var temp:string = dept[7];
console.log(temp);

//type assertions.
let someValue: any = 768;
let strLength: number = (someValue.toString()).length;
console.log('length of a number ' + strLength);