/*
The following class implements a stack with push , pop and print methods

It is used to create  stacks of different types (data types)
*/
var Stack = (function () {
    function Stack() {
        this.stack = [];
        this.TOP = -1;
    }
    Stack.prototype.itemPush = function (item) {
        this.stack.push(item);
        this.TOP++;
        console.log(item + " pushed and TOP = " + this.TOP);
    };
    Stack.prototype.itemPop = function () {
        if (this.TOP === -1) {
            console.log('Stack is empty');
        }
        else {
            this.TOP--;
            return this.stack.pop();
        }
    };
    Stack.prototype.print = function () {
        console.log(this.stack);
        console.log("TOP =" + this.TOP);
    };
    return Stack;
}());
var numArr = new Stack();
var strArr = new Stack();
numArr.itemPush(1);
numArr.itemPush(2);
numArr.itemPush(3);
numArr.print();
numArr.itemPop();
numArr.itemPop();
numArr.print();
strArr.itemPush('India');
strArr.itemPush('Usa');
strArr.itemPush('Russia');
strArr.print();
strArr.itemPop();
strArr.itemPop();
strArr.print();
//# sourceMappingURL=generic-class.js.map