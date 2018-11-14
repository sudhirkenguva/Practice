// _.pull() method removes the specified elements from array , IT MUTATES THE ARRAY
// _.without() method returns new array with specified elements removed
// pull vs without : _.pull mutates and _.without will not. (These methods will not work with array of objects)
// _.removes takes callback and mutates the array
var _ = require('lodash');

var arr1 = [25,-1,29,-1];
var arr2 = [85,90,76];

var arr3 = _.without(arr1,-1);
console.log('Original array:',arr1);
console.log('Returned array:',arr3);

var arrObj = [
    {name: 'Kalam',  profession: 'Teacher'},
    {name: 'Gandhi', profession: 'Advocate'},
    {name: 'Subash', profession: 'Army'}
];

var newArrObj = _.remove(arrObj,function(elem){
    return elem.name == 'Kalam' && elem.profession == 'Teacher';
});
console.log('Original Array: ',arrObj);
console.log('new array',newArrObj);