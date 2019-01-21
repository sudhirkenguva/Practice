// drop method returns a new array by removing specific number of elements from the beginning 
// by default 1 element is removed
var _ = require('lodash');
var arr = [1,2,3,4,5];
var arr2 = _.drop(arr,3);
console.log('arr2',arr2);

// dropwhile keeps on removing the items from beginning until the given condition becomes false

var arr = [1,2,3,4,5,4,3,2,1];
var arr2 = _.dropWhile(arr,function(elem){
    return elem < 4;
});
console.log(arr2);

// dropright and dropRightWhile are same as drop/dropWhile except that it will remove the items from right