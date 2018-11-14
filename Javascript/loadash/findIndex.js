//This method returns the index of matched element in an array or array of objects
var _ = require('lodash');
var arr = ['apple','banana','mango'];
var ind = _.findIndex(arr,function(elem){
    return elem == 'mango';
});
console.log('index of mango',ind);

var objArr = [
    {name: 'Sudhir',addr:"Gunupur"},
    {name: 'Sachin', addr:"Mumbai"},
    {name: 'Mahesh',addr:'Hyderabad'}
];

var ind = _.findIndex(objArr,function(elem){
    return elem.name == 'Sachin';
});
console.log('index of Sachin',ind);
