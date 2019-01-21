// Function constructors and prototype

function Person(name, age) {
    this.name = name;
    this.age = age;
}

// [imp] Person.prototype will refer to the  prototype which is common to all the objects created with this function constrouctor
Person.prototype.getDescription = function() {
    return this.name + ' is ' + this.age + ' years old';
}

let p1 = new Person('Ram', 52);
let p2 = new Person('Hari', 65);
console.log(p1.getDescription());
console.log(p2.getDescription());