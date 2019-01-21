function result() {
    console.log('ABC');
}

function sampleFun(tempFun) {
    setTimeout(tempFun, 0);
}

console.log('One');
sampleFun(result);
console.log('Two');