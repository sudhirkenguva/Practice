function foo() {
    console.log(1);
}

function foo() {
    console.log(3);
}

var foo;

foo(); // 3


foo = function() {
    console.log(2);
};