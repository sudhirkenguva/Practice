//Only the top/last level of an object property reference chain matters to the call-site. For instance:

function foo() {
    console.log( this.a );
}

var obj2 = {
    a: 42,
    foo: foo
};

a="Global a";
// obj2.foo(); //42
// foo(); //100 as, global a is 100.

var b= obj2.foo;  //alias name

b(); //100
