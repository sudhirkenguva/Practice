for (var i = 0; i < 10; i++) {
    setTimeout(function() { console.log(i); }, 0);
}

console.log('+++++++++++++++++++++++++++++++');

var _loop_1 = function(j) {
    setTimeout(function() { console.log(j); }, 0);
};
for (var j = 0; j < 10; j++) {
    _loop_1(j);
}