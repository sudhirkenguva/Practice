function printKeyValue() {
    for (key in this) {
        if (key !== 'printKeyValue')
            console.log(key, ':', this[key]);
    }
};

let obj1 = {
    fname: 'Sudhir',
    mname: 'Kumar',
    lname: 'Kenguva',
    printKeyValue: printKeyValue
};

let obj2 = {
    name: 'Sudhir',
    age: 26,
    addr: 'Hyd',
    printKeyValue: printKeyValue
};

obj1.printKeyValue();
obj2.printKeyValue();


// A very common piece of jQuery code​
// $("button").click(function(event) {
//     // $(this) will have the value of the button ($("button")) object​
//     ​ // because the button object invokes the click () method​
//     console.log($(this).prop("name"));
// });