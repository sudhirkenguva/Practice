// Generator is a factory method for creating iterator.
// yield keyword is used to return its value
// Any function with name preceded by * and containing one or more 'yield' expressions is a generator.js

function* evenGen() {
    let i = 0;
    while (true) {
        i = i + 2;
        i = yield i;
    }
}


let myGen = evenGen();

console.log(myGen.next().value) // 2
console.log(myGen.next().value) // undefined + 2 (NaN)
console.log(myGen.next(45).value) // 47
console.log(myGen.next(-89).value) // -87
console.log(myGen.next().value) // NaN
console.log(myGen.next(24).value) // 26
console.log(myGen.next(45).value) // 47