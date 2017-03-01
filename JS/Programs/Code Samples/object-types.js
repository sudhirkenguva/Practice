
var a = "This is a string";
console.log(typeof a) ;  

var b= new String("This is also a string");
console.log(typeof b); 

console.log((b instanceof String));  
console.log((a instanceof String));

//output

// string 
// object 
// true 
// false