let person = {
    name: 'Sudhir',
    age: 26,
    loc: 'Hyderabad'
};

console.log('Before delete.....');
console.log(person);

delete person.loc;
console.log('After Deleting \'loc\' prob.....');
console.log(person);

console.log('Adding a property');
person.qual = 'MTech CSE';
console.log(person);