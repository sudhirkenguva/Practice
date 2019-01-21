// ES6 for of loops, will use symbol.iterator to iterate through an array
// As json objects have no iterator by default, we cannot use for of loops with json objects --
// unless we define any custom symbol.iterator for iterate

let obj = {
    fname: 'Sudhir',
    mname: 'Kumar',
    lname: 'Kenguva',
    age: 26,
    [Symbol.iterator]: function() { return this; },
    next: () => {
        return { value: 'I am custom iterator', done: true }
    }
};

for (val of obj) {
    console.log(val);
}