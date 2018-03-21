// Iterator is an object(function) with an ability to iterate over a collection.
// In Javascript iterator object has next function, which will return next value on the collection
// or it can indicate end of the collection

function createIterator(collection) {
    let indx = 0;
    return {
        next: function() {
            return (indx < collection.length) ? { value: collection[indx++], done: false } : { value: undefined, done: true }
        }
    }
};

let a = [10, 20, 40, 50];

let myIterator = createIterator(a);
console.log(myIterator.next().value)
console.log(myIterator.next().value)
console.log(myIterator.next().value)
console.log(myIterator.next().value)
console.log(myIterator.next().done)