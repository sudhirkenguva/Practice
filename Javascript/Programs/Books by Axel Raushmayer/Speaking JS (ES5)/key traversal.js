// Object.keys --> returns all the enumurable properties
// Object.getOwnPropertyNames --> returns all properties (enumurable or not doesn't matter)
// for in loop --> used to traverse all the enumurable properties (prototype chain traversed)


let Person = {
    name: 'Untitled',
    age: 'Not available',
    role: 'Not available',
    getDetails: function() {
        return this.name + this.age + this.role;
    }
};

let p1 = {
    role: 'JS Developer'
};

Object.setPrototypeOf(p1, Person);
console.log(p1.role, p1.name, p1.age);

console.log('Object.keys [gets all enumurable own properties]');
console.log(Object.keys(p1));

console.log('Object.getOwnPropertyNames [gets all own properties]');
console.log(Object.getOwnPropertyNames(p1));

console.log('for.in loop [gets all properties in the prototype chain]');
for (key in p1) {
    console.log(key);
}

let arr = [10, 20, 30];

console.log(Object.keys(arr), '[returns only enumurable own properties]');

console.log(Object.getOwnPropertyNames(arr), '[returns all own properties]');

console.log('returns all the properties in prototype chain');
for (key in arr) {
    console.log(key);
}