let printKeyValues = function() {
    for (key in this) {
        if (key !== 'printKeyValue')
            console.log(key, ':', this[key]);
    }
    return this;
};

let obj = {
    printKeyValues: printKeyValues,
    class: 'Xth',
    subs: ['s1', 's2', 's3'],
    marks: [89, 92, 76]
};