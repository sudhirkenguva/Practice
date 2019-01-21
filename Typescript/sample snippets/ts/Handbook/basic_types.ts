/*
Available data types:
boolean
number
string
array
tuple
enum
void
never
undefined 
null
*/

/*
number type:
By default, floating point types.
TS supports decimal, binary, octal and hexadecimal literals.
*/

// Number systems
{
    console.log('----------> Snippet Name [number systems]') 

    let decNum = 55
    let hexNum = 0xff
    let binNum = 0b11
    let octNum = 0o10
    

    console.log('Decimal number is '+ decNum)
    console.log('HexNum number is '+ hexNum)
    console.log('Binary number is '+ binNum)
    console.log('Octal number is '+ octNum)

    //To print in different number formats
    //toString() takes base of the number systems as its argument

    console.log('Hex Format --> '+ decNum.toString(16))
    console.log('Octal Format --> '+ hexNum.toString(8))
    console.log('Binary Format --> '+ decNum.toString(2))
}


/*
Tuples
Tuples are the arrays with different data typed elements
*/

{
    console.log('---------> snippet name [Tuples]')

    let a :[number, string]  
    // Here a[0] will be number and a[1] will be string and any higher index must be of union type number|string

    a=[5,'India']

    console.log(a[0])
    console.log(a[1].toUpperCase()) 

}

/*
Enum
Enum is used to give friendly names to numeric constants
*/

{
    console.log('---------------> snippet name [enum]')
    enum Color{ red, green, blue }
    let favColor:Color
    favColor= Color.green
    console.log(favColor) //1

    console.log(Color[favColor]) //green
    console.log(Color[2]) //blue

    //we can start from any number
    enum Dept {civil=13, mechanical, electrical}
    let myDept:Dept
    myDept = Dept.electrical
    console.log(myDept) // 15

    //we can assign numbers to all the enum members
    enum Sub{english=34, hindi=56, oriya=92, maths=88}
    let mySub= Sub.maths

    console.log(mySub) //29
}

/*
any
This type allows any type of values to a variables.
When we want to skip type checking, we can use 'any'

*/
{
    console.log('-------------------> snippet name [any]')
    let a: any
    a=5 // number
    console.log(a)

    a= 'TS is great' // string
    console.log(a)

    a = true // boolean
    console.log(a)
}

/*
void
This type represents absence of any data type at all 
Its like opposite of any
it generally appears as return type of function
When a variable is declared as void type, only undefined or null can be assignable to it [ So not useful]
*/

{
    console.log('------------------> snippet name [void]')
    function printMsg():void{
        console.log('Journey Started!!!!!!')
    }
    printMsg()
    

    let b:void
    b=null
    console.log(b)
    b=undefined
    console.log(b)
    
}

/*
never
This type indicates a value that never occurs
function with never as its return type, must have unreachable code like [errors or infinite loop etc.]

*/
{
    console.log('------------> Snippet name [never]')
function abc():never {
    while(true){
        console.log('I am going on')
    }
}

}

/*
type assertion / type casting
We have to syntaxes for type casting
'as' syntax and <type>syntax
*/

{
    console.log('-------------> snippet name [type casting]')
    let a:any
    a= "Do or Die"
    console.log( (a as string).length)    

    console.log( (<string>a).toUpperCase())
}