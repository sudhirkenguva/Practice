// chunk splits the array into multiple sub arrays with given size (defaults to 1)

var _ = require('lodash');
var arr = [1,2,3,4,5,6,7,8,9,10];
var arr2 = _.chunk(arr, 3);
console.log(arr,"===========");
console.log(arr2,"===========");