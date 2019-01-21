// Promise.promisify and Promise.promisifyAll are used to convert 
// callback returning api to promise returning API. 

let sampleFun = function(a,b,cb) {
cb(a,b);
};

sampleFun(5,10,function sum(a,b){
    return a+b;
});