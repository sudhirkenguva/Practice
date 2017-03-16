function foo(num) {
    console.log( "foo: " + num );
    foo.count++;  //this do not refer to foo() but we can write foo instead.
    }

foo.count = 0;  //added a property called count to foo()

var i;

for (i=0; i<10; i++) {
    if (i > 5) {
        foo( i );
    }
}
// foo: 6
// foo: 7
// foo: 8
// foo: 9

// how many times was `foo` called?
console.log( foo.count ); // 4 -- WTF?