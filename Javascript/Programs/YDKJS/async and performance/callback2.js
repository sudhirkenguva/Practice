one = function() {
    console.log('One')
}

two = function() {
    console.log('Two')
}

three = function(fun) {
    // To call the fun asynchronously (i.e. next Tick of event loop)
    process.nextTick(fun)
}

console.log('Before')
three(two)
console.log('After')