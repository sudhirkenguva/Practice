// Computer object properties

// In the following object all the properties are static
let obj1 = {
    name: 'Sudhir',
    country: 'India',
    state: 'Odisha'
};

console.log('Obj1-----------------');
for (key in obj1) {
    console.log('obj1[' + key + '] = ' + obj1[key]);
}

//  In the following object some objects are computed ones.
let fname = 'First Name';
let lname = 'Last Name';
let mname = 'Middle Name';

let obj2 = {
    // The following fields will be values of fname and lname
    [fname]: 'Sudhir',
    [lname]: 'Kumar',
    // The following field is will be 'mname'
    mname: 'Kenguva'
}

console.log('Obj2----------------');

for (key in obj2) {
    console.log('obj2[' + key + '] = ' + obj2[key]);
}

// Symbol datatype

let mySymbol = new Symbol();