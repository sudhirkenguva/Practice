function foo() {
    console.log( this.a );
}

var obj = {
    a: 2,
    foo: foo
};

var a=5;

obj.foo(); // 2 this.a refers to a of obj

foo();   // 5 this.a refers to a of global object, i.e. global variable a.