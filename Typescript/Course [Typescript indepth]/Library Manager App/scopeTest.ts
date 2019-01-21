function scopeTest() {
console.log(a)
let t = true
    if(t) {
        var a = 'first message'
        let b = 'second message'
    }

console.log(a) 
}

scopeTest()