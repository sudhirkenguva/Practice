var promisifiedVarSum = function() {
    var sum = 0;
    for(i=0; i<arguments.length; i++) {
        sum += arguments[i];
    }
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            resolve(sum);
        }, 1000);
    });
}

module.exports = promisifiedVarSum; 