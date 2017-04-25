let person = {
    name: 'Sudhir',
    age: 26,
    loc: 'Hyderabad, TS'
};

// iterating over all the enumurable keys
console.log('key values');
for (key in person) {
    console.log('Key --> ' + key, ', Value --> ' + person[key]);
}

console.log('keys');
console.log(Object.keys(person))

// lets make age prop enumurable false

Object.defineProperty(person, "age", {
    enumerable: false
});

console.log('key values');
for (key in person) {
    console.log('Key --> ' + key, ', Value --> ' + person[key]);
}

console.log('keys');
console.log(Object.keys(person))