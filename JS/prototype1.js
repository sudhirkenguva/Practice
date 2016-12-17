'use strict';

function Cat(name,color){
  this.name=name;
  this.color=color;
}


var cat1 = new Cat('TOM','Black');
var cat2 = new Cat('MoT','Black & White');

console.log(Cat.prototype);
console.log(cat1.__proto__);

Cat.prototype.age=4;
cat1.__proto__.height=4.6;
cat2.__proto__.weight=2;

console.log(cat1);
console.log(cat2);
