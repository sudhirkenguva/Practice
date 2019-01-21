'use strict'
class Cat{
  constructor(name, color) {
    this.name = name;
    this.color = color;
  };
  speak() {
    console.log('Meeeeeeeeoooooooooooooow');
  };
};
var cat = new Cat('Fluffy', 'Brown');
console.log(cat);
cat.speak();

