var Promise = require('bluebird');

var p = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve('1 sec');
    }, 2000);
});

var p2 = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve('2 sec');
    }, 1000);
});

var p3 = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve('3 sec');
    }, 500);
});

Promise.all([p,p2,p3])
.then(function(result){
    console.log('Array of results');
    console.log(result);
})
.catch(function(err){
    console.log('Error: '+err);
});
