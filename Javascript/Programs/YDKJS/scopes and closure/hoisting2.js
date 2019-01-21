// foo(); // 1

// var foo;

// function foo() {
//     console.log(1);
// }

// foo = function() {
//     console.log(2);
// };

// The above code is interpreted as


foo(); // 1
function foo() {
    console.log(1);
}
foo = function() {
    console.log(2);
};