function* foo() {
    yield yield yield yield "foo"
}

let myGen = foo();
console.log(myGen.next().value); // foo
console.log(myGen.next().value); // undefined
console.log(myGen.next().value); // undefined
console.log(myGen.next().value); // undefined