function Person(name, age) {
    if (name) { this.name = name; }
    if (age) { this.age = age; }
}

Person.prototype.describe = function () {
    console.log(this.name + ' is ' + this.age + ' years old');
}
Person.prototype.name = 'Sudhir';
Person.prototype.age = 28;

let p1 = new Person('Kranti');
let p2 = new Person('Sankar', 50);

console.log(p1, p2);

p1.describe();
p2.describe();