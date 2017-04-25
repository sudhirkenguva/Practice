// Person object
let person = {
    fname: 'Default',
    lname: 'Default',
    getFullName: function() {
        return this.fname + ' ' + this.lname;
    }
};

// ram object
let ram = {
    fname: 'Ram',
    lname: 'Mohan'
};

// make person object prototype of ram object (Never do it, just for demo ----- performance issue)
ram.__proto__ = person;
console.log(ram.getFullName()); // [Ram Mohan] as the method is not available in ram, it will check its prototype which is person.

// hari object
let hari = {
    fname: 'Hari'
};

hari.__proto__ = ram;
console.log(hari.getFullName()); // [Hari Mohan]

hari.__proto__ = person;
console.log(hari.getFullName()); // [Hari Default]