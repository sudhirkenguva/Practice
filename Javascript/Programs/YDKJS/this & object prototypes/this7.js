let printKeyValues = function() {
    for (key in this) {
        if (key !== 'printKeyValue')
            console.log(key, ':', this[key]);
    }
};

let myFun = function(cb, obj) {
    cb.apply(obj); // /This method binds 'obj' with 'this' inside cb i.e. printKeyValues
}

myFun(printKeyValues, {
    frontEnd: 'Angular JS',
    backEnd: 'Node JS',
    DB: 'Mongo'
});