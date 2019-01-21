fruit1 = 'Apple';
fruit2 = 'Grape';
fruit3 = 'Orange';

let testObj = {
    one: 'C',
    two: 'C++',
    three: 'Java',
    printKeyValue: function() {
        for (key in this) {
            if (key !== 'printKeyValue')
                console.log(key, ':', this[key]);
        }
    }
};

let obj1 = {
    fname: 'Sudhir',
    mname: 'Kumar',
    lname: 'Kenguva',
    printKeyValue: testObj.printKeyValue
};

let obj2 = {
    name: 'Sudhir',
    age: 26,
    addr: 'Hyd',
    printKeyValue: testObj.printKeyValue
};

testObj.printKeyValue();
obj1.printKeyValue();
obj2.printKeyValue();

let demoFun = testObj.printKeyValue;

demoFun(); // call site is window
// A very common piece of jQuery code​
// $("button").click(function(event) {
//     // $(this) will have the value of the button ($("button")) object​
//     ​ // because the button object invokes the click () method​
//     console.log($(this).prop("name"));
// });