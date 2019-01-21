// Javascript is statically scoped language
// Function scope will depend on where the function is defined (rather than called) [lexical scope]

// The behaviour of this is something different, its like dynamic scope
// it depends on where the function is called instead of where its defined.

// this keyword inside a function will refer to the object the function belongs to, 
// if no object defined , it will refer to window object.

let sampleObj1 = {
    id: 'I love JS',
    fun: function() {
        console.log('this.id', this.id); // I love india
        console.log('this', this);
        // console.log('id', id); // Error: id is not defined.
    }
}

sampleObj1.fun();

let objLikeFun = (function() {
    let id = 'I love Algo';
    fun = function() {
        console.log('this.id', this.id);
        console.log('id', id);
        console.log('this', this);
    }
    return fun;
})();

objLikeFun();