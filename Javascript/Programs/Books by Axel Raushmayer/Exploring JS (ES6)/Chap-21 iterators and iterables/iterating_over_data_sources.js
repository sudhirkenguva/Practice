// We can iterate over following data sources

console.log('Array iteration');
let arr = ['I', 'Love', 'JS'];
for (elem of arr) {
    console.log(elem);
}

console.log('String iteration');
let str = 'Hello world!';
for (c of str) {
    console.log(c);
}

console.log('Map iteration');
let mp = new Map();
mp.set(1, 85);
mp.set(2, 65);
mp.set(3, 89);
mp.set(4, 95);

for (m of mp) {
    console.log(m);
}

console.log('Set iteration');
let set = new Set();
set.add(5);
set.add(45);
set.add(5);
set.add(55);
set.add(15);
console.log(set);
console.log(set.has(3));

console.log('iterating over object.keys()');
let obj = {
    name: 'Sudhir Kumar K',
    loc: 'Hyd'
};

for (key of Object.keys(obj)) {
    console.log(key, ':', obj[key]);
}

var obj2 = { foo: 'bar', baz: 42 };
console.log(Object.entries(obj2));