// closure is a function plus variables in the surrounding scope.
function createIncrementor(value) {
    return function() {
        value++;
        return value;
    }
};

var inc = createIncrementor(5);
console.log(inc());
console.log(inc());
console.log(inc());


var result = [];
for (var i = 0; i < 5; i++) {
    (function () {
        var i2 = i;
        result.push(function () { return i2 });
    })();
}

console.log(result[0]());
console.log(result[1]());
console.log(result[2]());
console.log(result[3]());
console.log(result[4]());


function fun1() {
    var age = 10; //private.
    return {
        incAge: function() {
            age++;
        },
        getAge: function() {
            return age;
        }
    }
};

var obj = fun1();
obj.incAge();
console.log(obj.getAge());

var obj2 = fun1();
console.log(obj2.getAge());

var d = new Date();
var n = d.toJSON();
console.log(d,"-->",n);
