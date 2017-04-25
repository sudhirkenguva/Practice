function foo() {
    let a = 2;

    function bar() {
        console.log(a);
    };
    return bar;
};

let returnedBar = foo();
console.log('===========')
returnedBar(); // (2)  it is able to access the lexical scope of bar(), even outside of its scope (which is called CLOSURE)
console.log('===========')