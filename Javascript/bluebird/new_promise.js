var Bluebird_promise = require('bluebird');

var delayedMsg = function(flag) {
    return new Bluebird_promise(function(resolve,reject){
        setTimeout(function(){
            console.log('Function called.');
            if(flag == true) {
                resolve([1,2,3,4,5,6,7]);
            } else {
                reject('Reject message');
            }
        },1000);
    })
};


var p = delayedMsg(true);

p.then(function(result){
    console.log('Result: '+result);
},function(err){
    console.log('Error: '+err);
});
