/*
Function Invocations
*/

// using function.call


    function msg(text:string) {
        console.log(JSON.stringify(this) +  "says:" + text)        
    }

    msg.call('Sudhir', 'Hello World') 

 // this call 
    msg('Ram')

// will be converted to 
    msg.call(undefined,'Hari')

let person = {
    name: 'Mr.John',
    fun : msg
}

person.fun('Rama Krishna')