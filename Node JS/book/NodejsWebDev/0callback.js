let cb = function() {
    console.log('I am callback');
}

let testFun = function(cb) {
    setTimeout(cb, 0);
}

testFun(cb);
console.log('end');