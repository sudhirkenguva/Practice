var _ = require('lodash');

var  arr = [10,20,30];

var obj ={a:10,b:15,c:20,d:25};

var objArr = [
    {name:'Ram', marks:20},
    {name:'Hari', marks:30},
    {name: 'Gopal', marks: 40}
];

var arr2 = _.map(obj,function(elem,ind,arr){
    console.log(elem);
    return elem*elem;
});

var arr3 = _.map(objArr,'name');
console.log(arr3);

console.log(arr2,'Arr2');