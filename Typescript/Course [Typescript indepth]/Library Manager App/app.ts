class HelloWorld {
    constructor(public msg) {
        this.msg = 'Hello '+ msg
    }
}


let obj = new HelloWorld("Sudhir")
console.log(obj.msg)