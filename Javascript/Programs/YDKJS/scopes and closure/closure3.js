function foo() {
    let a = 2;

    function bar() {
        console.log(a);
    }

    baz(bar);
}


function baz(fn) {
    fn();
}

foo();