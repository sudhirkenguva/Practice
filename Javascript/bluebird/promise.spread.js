var Promise = require('bluebird');



var p = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve('1 sec');
    }, 1000);
});

var p2 = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve('2 sec');
    }, 700);
});

var p3 = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve('3 sec');
    }, 500);
});

Promise.all([p,p2,p3])
.spread(function(res1,res2,res3){
console.log('res1',res1);
console.log('res2',res2);
console.log('res3',res3);
});

