let obj1 = {
    name: 'Sudhir',
    hobbies: ['Playing carrom', 'listening music', 'internet surfing']
};
console.log(JSON.stringify(obj1));
let obj2 = obj1; // Now obj1 and obj2 are pointing to same content.
obj1.hobbies[2] = 'Reading books';
obj1.name = "Shiva";
console.log(JSON.stringify(obj2));

// Creating 2 independent objects.
let keyboard = {
    brand: 'Microsoft',
    price: 600,
    color: 'black'
};

let keyboardCopy = JSON.parse(JSON.stringify(keyboard)); // Now both objects are independent, 
//   but this method only works for only JSON safe objects.
keyboard.color = 'red';

console.log(JSON.stringify(keyboard));
console.log(JSON.stringify(keyboardCopy));

let mouseTypes = ['trackball', 'led', 'wire less'];

let mouse = {
    brand: 'Logitech',
    type: JSON.parse(JSON.stringify(mouseTypes)), // we are using reference, so when we change mouseTypes array, that will reflect in mouse object.
    color: ['black', 'gray', 'brown']
};

mouseTypes[2] = 'Bluetooth';
console.log(JSON.stringify(mouse));

let monitor = {
    screenSize: '14.7"',
    brand: 'acer',
    price: 7000
}

let monitorCopy = Object.assign({}, monitor);
monitor.brand = 'hp';
console.log(JSON.stringify(monitorCopy));