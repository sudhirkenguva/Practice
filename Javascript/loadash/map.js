var _ = require('lodash');

// map with object

var obj = {name: "Sudhir", age: 28, addr:"Gunupur"};

// callback accepts value of each key
var arr = _.map(obj, function(elem){
    return elem;
});

console.log(arr);

//map with normal array

var arr = [10,20,30,40,50];
// map's callback accepts each array element and returns new array with processed elements
var arrResult = _.map(arr,function(elem){
    return elem - 20; // processing each element
});

console.log('Old Array: ',arr);
console.log('New Array: ',arrResult);

// map with array of objs

var objArr = [
    {name: 'Sachin Tendulkar', ranking: 1},
    {name: 'Virat Kohli', ranking: 2},
    {name: 'Brian lara', ranking: 3},
    {name: 'Virendra Schewag', ranking: 4}
];

// Extracting the values of specific field.
var names = _.map(objArr,function(elem){
    return elem.name;
});
console.log(names);

// alternate syntax
var names = _.map(objArr,"name");
var rankings = _.map(objArr,"ranking");
console.log("Names ",names);
console.log("rankings ",rankings);

var names = _.pluck(objArr,"name");
console.log(names,"names");


