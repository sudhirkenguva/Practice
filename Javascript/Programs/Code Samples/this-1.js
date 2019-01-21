function foo(num) {
    console.log( "foo: " + num );

    // keep track of how many times `foo` is called
    this.count++;    //It is not referring to count property of foo() 
                      //rather it is referring to global count 
                        //with NaN as initial value
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
console.log( foo.count ); // 0 -- WTF?