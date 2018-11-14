// compact creates a new array by removing the falsy values (0, false, null, undefined, NaN, empty string('')) from array

var _ = require('lodash');
var arr = ['abc', 1, undefined, 0, null, false, ''];
var arr2 = _.compact(arr);
console.log(arr,"old array");
console.log(arr2,"new array");

var objArr = [
    {name:'Sudhir'},
    {name:'Sachin',ranking:1}
];

var arr2 = _.compact(_.map(objArr,"ranking"));
console.log(arr2,'arr2 ===========');
