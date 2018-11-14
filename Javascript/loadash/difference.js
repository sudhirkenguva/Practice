// _.difference returns a new array which does not include the elements from other array
var _ = require('lodash');
var arr1 = [1,2,3,4];
var arr2 = [2,4,6,8];
var diffArr = _.difference(arr1,arr2);
console.log(diffArr);