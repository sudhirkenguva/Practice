var Promise = require('bluebird');

var p = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve('1');
    }, 1000);
});

var p2 = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve('2');
    }, 1000);
});

var p3 = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve('3');
    }, 999);
});

Promise.any([p,p2,p3])
.then(function(result){
    console.log('result');
    console.log(result);
})
.catch(function(err){
    console.log('Error: '+err);
});
