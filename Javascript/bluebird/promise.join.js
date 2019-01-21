var Promise = require('bluebird');

var p = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve('1 sec');
    }, 1000);
});

var p2 = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve('2 sec');
    }, 2000);
});

var p3 = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve('3 sec');
    }, 3000);
});

Promise.join(p,p2,p3)
.spread(function(){
    for(var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
    // console.log(result);
});
