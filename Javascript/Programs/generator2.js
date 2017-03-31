function* sampleGen() {
    console.log('Before 1st yield');
    yield 'a';
    console.log('Before 2nd yield');
    yield 'b';
    console.log('Before 3rd yield');
    yield 'c';
    console.log('Before 4th yield');
    yield 'd';

}

let myGen = sampleGen();
console.log(myGen.next().value); // before 1st yield, a
console.log(myGen.next().value); //before 2nd yield , b
console.log(myGen.next().value); // before 3rd yield , c
console.log(myGen.next().value); // before 4th yield, d
console.log(myGen.next().value); // undefined
console.log(myGen.next().value); // undefined
console.log(myGen.next().value); // undefined