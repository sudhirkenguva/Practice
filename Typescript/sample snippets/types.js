//Number data type available both in js & ts but ts has octal and binary literal
var a = 20;
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
console.log(a);
console.log(decimal);
console.log(hex);
console.log(binary);
console.log(octal);
//template Strings and embeded expressions
var fullName = "Bob \nBobbington";
var age = 37;
var sentence = "Hello, my name is " + fullName + ".\n\nI'll be " + (age + 1) + " years old next month.";
// Arrays
var list = [1, 2, 3];
console.log(list);
// Declare a tuple type
//datatypes of 1st 2 elements of tupe is string & number, further numbers can be of any type
var x;
// Initialize it
x = ["Hello", 55]; // OK
console.log(x);
console.log(x[0].length); //OK
// console.log(x[1].length); //Error!! length of number is undefined
//Enums (by default members take values from 0)
var color;
(function (color) {
    color[color["red"] = 0] = "red";
    color[color["green"] = 1] = "green";
    color[color["blue"] = 2] = "blue";
})(color || (color = {}));
;
var z = color.green;
console.log('+++++++' + z + '++++++++');
// We can manually submit values
var dept;
(function (dept) {
    dept[dept["eee"] = 5] = "eee";
    dept[dept["ie"] = 6] = "ie";
    dept[dept["cse"] = 7] = "cse";
})(dept || (dept = {}));
;
var b = dept.cse;
console.log('+++++++' + b + '++++++++');
//We can also print the enum member name using enum index
var temp = dept[7];
console.log(temp);
//type assertions.
var someValue = 768;
var strLength = (someValue.toString()).length;
console.log('length of a number ' + strLength);
