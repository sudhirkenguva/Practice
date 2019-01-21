var Promise = require('bluebird');
var p1 = Promise.resolve('ABC');
p1
.then(function(res){
    console.log('1st then: ',res);
    return 'PQR';
})
.tap(function(res){
    console.log('tap: ',res);
})
