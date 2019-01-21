// There are 2 syntaxes for getter and setter

// literal syntax

let myObj = {
    get a() {
        console.log('getter called.(myObj)');
        return this._a_;
    },
    set a(val) {
        console.log('setter is called.(myObj');
        this._a_ = val;
    }
};

console.log(myObj.a); // undefined (getter called)
myObj.a = -89; // setter is called
console.log(myObj.a); // 89 (getter is called)

// using define property

let myObj2 = {};
Object.defineProperty(myObj2, "a", {
    get: function() {
        console.log('getter called (myObj2)')
        return this._a_;
    },
    set: function(val) {
        console.log('setter called (myObj2)')
        this._a_ = val;
    }
});

myObj2.a = 33;
console.log(myObj2.a);