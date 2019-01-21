// for of loops require iterators and automatically calls next() untill done:true encountered.

let a = [10, 20, 30, 40, 50];

let obj = {
    name: 'Sudhir',
    age: 26,
    org: 'Spectraforce india Pvt.'
};

// for of loop prints values
for (val of a) {
    console.log(val);
}


// for in loop prints keys
for (key in a) {
    console.log(key);
}

console.log('-----------------');

for (key in obj) {
    console.log(key, obj[key]);
}