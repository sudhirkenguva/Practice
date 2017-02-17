/*
The following class implements a stack with push , pop and print methods

It is used to create  stacks of different types (data types)
*/

class Stack <T> {
    stack: T[] = []
    TOP: number = -1
    itemPush(item: T) {
        this.stack.push(item)
        this.TOP++
        console.log(`${item} pushed and TOP = ${this.TOP}`)
    }

    itemPop():T {
        if(this.TOP === -1) {
            console.log('Stack is empty')
        } else {
            this.TOP--
        return this.stack.pop()}
    }

    print() {
        console.log(this.stack)
        console.log("TOP =" + this.TOP)
    }
}

let numArr = new Stack<number>()
let strArr = new Stack<string>()
numArr.itemPush(1)
numArr.itemPush(2)
numArr.itemPush(3)
numArr.print()
numArr.itemPop()
numArr.itemPop()
numArr.print()

strArr.itemPush('India')
strArr.itemPush('Usa')
strArr.itemPush('Russia')
strArr.print()
strArr.itemPop()
strArr.itemPop()
strArr.print()


