function getAllPropertyNames(obj) {
    var result = [];
    while (obj) {
        // Add the own property names of `obj` to `result`
        result = result.concat(Object.getOwnPropertyNames(obj));
        obj = Object.getPrototypeOf(obj);
    }
    return result;
}


let a = [1,2,3,4,5,6,7];
console.table(a);