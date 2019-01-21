var empData = {
    name: 'Sudhir',
    loc: "Hyd",
    scores: [20,30,40,50],
    doj: {
        day: 7,
        month: 8, 
        year: 2018
    }
};

var replacerFun = function(key,value){
    // in first iteration key value will be whole object, to skip this
        console.log('Traversed Key:',key);
        if(typeof value == 'string') {
            value = value.toLocaleUpperCase();
        } else if(typeof value == 'number') {
            value = value * 2;
        }
    return value;
}
var empDataByReplacer = JSON.stringify(empData,replacerFun);
console.log('By Replacer function:');
console.log(empDataByReplacer)

// White list properties, we can mention array of properties to be considered for printing
var selectedFields = JSON.stringify(empData,['name','scores']);
console.log(selectedFields);


// when the third param is string, it will show the given string before each value 
var prepend = JSON.stringify(empData,null,'|--');
console.log(prepend);

// when the third param is a number, it will add the given no. of spaces before each values which forms a prettified result.
var prettified = JSON.stringify(empData,null,4);
console.log(prettified);