//spread operator is used to convert array into list of coma separated list
var a = [10,40,15,-35];
console.log(Math.max(...a));

//rest operator is used to collect all the remaining params to a function.
function fun1(a, b, ...rest) {
    console.log("a-->",a);
    console.log("b-->",b);
    console.log("rest-->",rest);
}

fun1();
fun1(10);
fun1(10,20);
fun1(10,20,30,40);

// Note: though both the operators have same symbols, their functionality is opposite, rest op is used in function definition and spread op is used in function calling.