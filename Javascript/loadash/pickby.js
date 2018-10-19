var _ = require('lodash');

var obj = {
    a: 10, 
    b: 20, 
    c: 30, 
    d: 40
};

var obj2 = _.pickBy(obj,function(elem) {
    return elem >= 15;
});

console.log(obj2);