var Person = (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.show = function () {
        console.log('Name ' + this.name + '\n Age ' + this.age);
    };
    return Person;
}());
;
var p = new Person('John', 35);
p.show();
