let a = 25;

foo();
a = 45;
foo();

function foo() {
    console.log('The value of a is', a);
}