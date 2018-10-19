let personProto = {
    getFullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

let p1 = Object.create(personProto);
p1.firstName = "Ram";
p1.lastName = "Mohan";


let p2 = Object.create(personProto);
p2.firstName = "Rama";
p2.lastName = "Krishna";


console.log(p1.getFullName());
console.log(p2.getFullName());

// listing all the own enumerable properties :
console.log(Object.keys(p1));

// listing all properties (for-in loop)
for(let key in p1) {
    console.log(key);
}

// to check if a property exist in the object (includind prototypes)
 console.log('getFullName' in p1);

// to check if a property exist directly in the object (excluding prototypes)
console.log(Object.prototype.hasOwnProperty.call(p1,'getFullName'));

