//in js, when we use array indexes enclosed within quotes, that is assumed as numbers

var a= [91,28,36];

console.log(a["0"]);
console.log(a["1"]);
console.log(a["2"]);

//in js, arrays are just objects, in addition to indexes they 
//can have string properties

var a= [791,288,306];

a['Ram']='First name';
a['Hari']='Second name';
a['Venu']='Third name';

console.log(a[0]);
console.log(a[1]);
console.log(a['Venu']);


