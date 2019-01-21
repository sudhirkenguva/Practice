/*
Thre are around 34 Array methods
[The following functions are static functions (I guess) , so they are called with class name Array]
Array.from()
Array.isArray()
Array.observe()
Array.of() 

[The following function can be called with array Instances]
Array.prototype.concat()
Array.prototype.copyWithin()
Array.prototype.entries()
Array.prototype.every()
Array.prototype.fill()
Array.prototype.filter()
Array.prototype.find()
Array.prototype.findIndex()
Array.prototype.forEach()
Array.prototype.includes()
Array.prototype.indexOf()
Array.prototype.join()
Array.prototype.keys()
Array.prototype.lastIndexOf()
Array.prototype.map()
Array.prototype.pop()
Array.prototype.push()
Array.prototype.reduce()
Array.prototype.reduceRight()
Array.prototype.reverse()
Array.prototype.shift()
Array.prototype.slice()
Array.prototype.some()
Array.prototype.sort()
Array.prototype.splice()
Array.prototype.toLocaleString()
Array.prototype.toSource()
Array.prototype.toString()
Array.prototype.unshift()
Array.prototype.values()
Array.prototype[@@iterator]()

*/

/* Array.from
This method is used to create array from array like iterable object (like string, set, map, etc)
*/
{
    //takes one mandatory argument
    let a = Array.from("Sudhir")
    console.log(a)

    //takes a mapping function as 2nd argument (optional)
    let b = Array.from("Sudhir", (val) => { return val + '**' })
    console.log(b)

    //takes 3rd argument an object, to be used as 'this', inside lambda function
    var tempObj = {
        name: 'It is temporary object'
    }
    let c = Array.from("Sudhir", (val) => {
        console.log(this)
        return val + ';;;;'
    })
    console.log(c)

}

// Array.isArray() this checks whether the given argument is array or not

{
    console.log(Array.isArray('Sudhir')) //false -- because string is primitive type and array is not
    console.log(Array.isArray(['s', 'u', 'd', 'h', 'i', 'r'])) // true
    console.log(Array.isArray({ name: 'ram', age: 25 })) // false -- argument is JSON object
    console.log(Array.isArray([{}])) // true -- array of empty json
}

// Array.of() method
// It is used to create array from list of values of same/different data types

console.log(Array.of(1, 2, 3, 4, 5)); // [1,2,3,4,5]
console.log(Array.of(5)); // [5]
console.log(Array.of({ name: 'ram', age: 20 }, { name: 'hari', age: 24 }, { name: 'gopal', age: 23 }, { name: 'venu', age: 20 })); // [{},{}, ...]

// Array.of() vs Array()
//The main difference between these methods is 
console.log(Array(5)) //[,,,,]  creates an empty array of size 5
console.log(Array.of(5)) //[5] creates an array with one element 5

console.log(Array(1, 2)) //[1,2]
console.log(Array.of(1, 2)) //[1,2]

console.log(Array({})) //[{}]
console.log(Array.of({})) //[{}]


console.log(Array(1, true, 'sudhir', { prop: 'Sample text' })) // [ 1, true, 'sudhir', { prop: 'Sample text' } ]
console.log(Array.of(1, true, 'sudhir', { prop: 'Sample text' })) // [ 1, true, 'sudhir', { prop: 'Sample text' } ]

//

//Array.prototype.concat
//Used to merge multiple arrays and returns new array/values, so existing arrays do not change
//as it must be called on an array instance, we must have at least one array (others can be values/arrays)

{
    let a = [1, 2, 3];
    let b = [4, 5, 6];
    console.log('Before concat');
    console.log('a : ' + a);
    console.log('b : ' + b);

    console.log(a.concat(b, 20, 30, 50));

    console.log('After concat');
    console.log('a : ' + a);
    console.log('b : ' + b);

}

/*
Array.prototype.copyWithin
This method will copy existing elements and paste them inside that given array,
i.e. it will change the array content by replicating some elements
We can call it 3 ways
arr.copyWithin(target)
arr.copyWithin(target, start)
arr.copyWithin(target, start, end)

target --> the index where the elements will be pasted.
start --> the index where to start copy
end --> the index where to end copy
This method never changes size of array (i.e paste will be done within the array)
*/
console.log('arr.copyWithin()');

{
    let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    a.copyWithin(2)
    console.log(a)

    let b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    b.copyWithin(3, 8)
    console.log(b)

    let c = ["Javascript", "Typescript", "Angular", "CSS", "ML", "Python"]
    c.copyWithin(0, 3, 5)
    console.log(c) // target = 0, start = 3, end = 5 (i.e from index 3 to 4 (not 5) will be copied)
}

/*
Array.prototype.entries()
This method returns an iterable object containing key/value pairs , where key is index and value is element
*/
console.log('arr.entries')

{
    let a = ['India', 'America', 'Canada', 'Germany']
    let obj = a.entries()
        //we can iterate over obj
    for (let item of obj) {
        console.log(item)
    }
}

/*
Array.prototyp.every() & Array.prototype.some()

Array.prototype.every(): This method takes a test callback (function with boolean return value) as argument
                         checks whether every element of the array passing that test

Array.prototype.some(): This method takes a test callback (function with boolean return value) as argument
                         checks whether atleast one element of the array passing that test
*/
console.log('arr.every() & arr.some()')

{
    let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        //checks whether all the elements are numbers or not
    testFun = function(element, index, array) {
        return element > 5;
    }

    console.log('arr.every() ' + a.every(testFun))
    console.log('arr.some() ' + a.some(testFun))

    let b = [1, 2, true, 4, 5, 6, 7, 8, 9, 10]

    let result = b.every((element, index, array) => {
        return typeof(element) == "number"
    })

    console.log('b =' + result)
}

/*
Array.prototype.fill()
fills the array with given value
It can be called in 3 ways 
arr.fill(value) // fills entire array with value 
arr.fill(value, start) // fills the array from start index
arr.fill(value, start, end) // fills the array from start to end index
It modifies the Array
*/

{
    let pqr = [10, true, 'india', 23.34]
    pqr.fill(-99)
    console.log(pqr)

    let stu = [10, 20, 30, 40, 50];
    stu.fill(-88, 2) // fill from 2nd index
    console.log(stu)

    let names = ['Ram', 'Gopal', 'Venu', 'Madhav'];
    names.fill(-90, 0, 2)
    console.log(names) // fills from 0 to 2 (i.e index 0 and  index 1 not 2 )
}


/*
Array.prototype.filter()
This method filters the given array
It takes a test callback, returns new array with elements which will pass the test
*/
console.log('arr.filter')


{
    let list = [10, 20, 30, 40, 50];
    let testFun = function(val, index, arr) {
        return val > 25;
    }

    let newList = list.filter(testFun);
    console.log(newList)

}

/*
Array.prototype.find()
This method accepts  a test callback,
It returns the first element that satisfies the callback (the 1st value for which callback returns true)
when no element found, it returns undefined
*/
console.log('arr.find');

{
    let list = [10, 20, 30, 40, 50];
    let testFun = function(val, index, arr) {
        return val > 25
    }
    console.log(list.find(testFun))
}

/*
Array.prototype.findIndex()
This method takes a test callback as argument and returns the index of 1st element that satisfies the callback
if the item not found , it will return -1
*/
{
    let list = [10, 20, 30, 40, 50];
    let testFun = function(val, index, arr) {
        return val > 45
    }

    console.log(list.findIndex(testFun)) // 4

}
/*
Array.prototype.forEach()
This method takes a callback and applies it to each element of the array.
its return value is always undefined
This method skips any uninitialized value
[importnat!!!] break/continue cannot be used in forEach loop
*/
console.log('arr.forEach()')

{
    let nameList = ['Ram', 'Gopal', 'Venu', 'Madhav'];
    nameList.forEach(val => console.log(val.toUpperCase()))

    nameList.forEach((val, index) => console.log('Length of nameList[' + index + '] is ' + val.length));

    let a = [10, 20, , 40];
    console.log(a.length);
    // 2nd index will be skipped, as its values is not initialized
    a.forEach((value, index) => {
        console.log('Index: ' + index + ' ,value:' + value)
    })

}

/*
Array.prototype.includes() 
This method returns true , if the given element present in the array otherwise returns false.
it can be called in 2 ways
arr.includes(value)
arr.includes(value, startIndex)
if start index is greater than or equal to array length , false is returned
*/

console.log('arr.includes')

{
    let abc = [10, 20, 30, 40, 50];
    console.log(abc.includes(10)) // true

    console.log(abc.includes(10, 2)) //false (as start index is 2 )
    console.log(abc.includes(50, 5)) // false

    console.log(abc.includes(10))
}

/*
Array.prototype.indexOf() 
This method returns the index of given element in the array, if the element is absent, -1 will be returned
it can be called in 2 ways
arr.indexOf(value)
arr.indexOf(value, startIndex)
if start index is greater than or equal to array length , -1 is returned
*/

console.log('arr.includes')

{
    let abc = [10, 20, 30, 40, 50];
    console.log(abc.indexOf(10)) // 0

    console.log(abc.indexOf(10, 2)) //-1 (as start index is 2 )
    console.log(abc.indexOf(50, 5)) // -1

    console.log(abc.indexOf(10))
}

/*
Array.prototype.join()
This method joins all the elements of the array and returns a string
It can be called in 2 ways
arr.join() ; // default separator is comma (,)
arr.join(separator)
similary arr.toString(), it takes no argument and generates a string of array elements separated by comma(,)
*/

{
    let numList = [10, 20, 30, 40, 50];
    console.log(numList.join());
    console.log(numList.join('-->'));
    console.log(numList.toString());
}

/*
Array.prototype.keys()
It will return iterator object containing keys(indices) of an array 
similary, Array.prototype.entries iterator object containing key/value pairs of an array
          Array.prototype.values returns iterator object containing values of an array

[important!!!!]
The best way to iterate and extract values of iterator objec is for .. of loop
*/
console.log('arr.keys(), arr.values(), arr.entries()');

{
    let numArray = [10, 20, 30, 40, 50];
    let keysIterator = numArray.keys();
    let keyValueIterator = numArray.entries();

    console.log('list of keys: ')
    for (let item of keysIterator) {
        console.log(item)
    }

    console.log('list of entires: ')
    for (let item of keyValueIterator) {
        console.log(item)
    }

}

/*
Array.prototype.lastIndexOf()
This function returns the index of last occurence of given element in the array.
if element not found, it returns -1
it can be called in 2 ways:
arr.lastIndexOf(searchElement)
arr.lastIndexOf(searchElement, fromIndex)
  [important!!!]fromIndex is the index from where search will start backwards 
*/

console.log('arr.lastIndexOf()')

{
    let nameList = ['Ram', 'Gopal', 'Venu', 'Madhav', 'Ram'];
    console.log(nameList.lastIndexOf('Ram')) // 4 
    console.log(nameList.lastIndexOf('Hanuman')) // -1
    console.log(nameList.lastIndexOf('Venu', 3)) // 2  (searching will start from index 3 to backward)
    console.log(nameList.lastIndexOf('Venu', 1)) // -1  (searching will start from index 1 to backward)

}

/*
Array.prototype.map()
This function takes a callback as argument
executes the callback on every element/ modifies it
returns new array.

Note: 
But, forEach() only executed on each element (will not return any new array)
every(), executes a callback on every function and tests whether all the elements satisfied by that test func or not
find(), returns the 1st element that satisfies the test callback
findIndex(), returns the index of 1st element that satisfies the test callback
indexOf() returns the index of 1st occurence of given element
lastIndexOf() returns the index of last occurance  of given element
*/

console.log('arr.map()')

{
    let strList = ['Ram', 'Gopal', 'Venu', 'Madhav'];

    let newList = strList.map(val => val.toUpperCase());
    console.log('Old array: ' + strList);
    console.log('New array: ' + newList);

    let intList = [11, 21, 30, 40, 51];
    newList = intList.map(val => val % 2)
    console.log(newList)
}

/*
Array.prototype.push()
This method inserts one or more elements at the end of the array
returns new length of the array.
*/
console.log('arr.push');

{
    let numList = [10, 20, 30, 40, 50];
    numList.push(-89, -98);
    console.log(numList)
}

/*
Array.prototype.pop()
This method removes last element in the array
returns removed element
this method takes no arguments
*/

console.log('arr.push');

{
    let numList = [10, 20, 30, 40, 50];
    item = numList.pop();
    console.log(numList);
    console.log('removed item is : ' + item);
}

/*
Array.prototype.reduce()
This method takes 2 arguments 
    1) callback [with parameters: accumulator, value, index, arr]
    2) initial value of the accumulator
This method will keep on accumulating (reducing ) the value from left to right
But, reduceRight method is same as reduce(), it only accumulates from right to left
*/
console.log('arr.reduce() & arr.reduceRight()')

{
    let numList = [10, 20, 30, 40, 50];
    // sum of array elements
    let reducedValue = numList.reduce((acc, val, index, arr) => acc + val, 0)
    console.log('Reduced value: ' + reducedValue)

    // array element concatination

    let nameList = ['Ram', 'Gopal', 'Venu', 'Madhav'];

    let singleList = nameList.reduce((acc, val, index, ara) => acc + ' ' + val, '')
    console.log(singleList)

    singleList = nameList.reduceRight((acc, val, index, ara) => acc + ' ' + val, '')
    console.log(singleList)

}

/*
Array.prototype.reverse
This method reverses the array
it also returns a reference of the array
*/

console.log('array.reverse')

{
    let numbers = [10, 20, 30, 40, 50];
    console.log(numbers.reverse())

}

/*
Array.prototype.shift & unshift
shift  removes 1st element of the array & returns it
pop removes last element of the array & returns it

push adds one/more elements to the array & returns new array length
unshift adds one/more elements to the array & returns new array length

*/

console.log('arr.shift & arr.unshift');

{
    let numbers = [10, 20, 30];
    numbers.push(40); //10 20 30 40
    console.log(numbers);

    numbers.push(70, 80); //10 20 30 40,70,80
    console.log(numbers);

    numbers.pop();
    numbers.pop();
    console.log(numbers); // 10,20,30,40

    numbers.shift();
    numbers.shift();
    console.log(numbers); // 30,40

    numbers.unshift(-90, 120);
    console.log(numbers); // -90 120 30 40  
}

/*
Array.prototype.slice()
This method copies values from an array & returns portion of an array
1st argument is start index
2nd argument is number of values to be copied.
it can be called in 3 ways
slice() --> copies entire array
slice(start) --> copies from start index to end of the array
slice(start, end) --> copies from start index to end index -1

Caution!!!!: 
For object references (and not the actual object), slice copies object references into the new array. 
Both the original and new array refer to the same object. 
If a referenced object changes, the changes are visible to both the new and original arrays.
*/
console.log('slice and splice ')


{
    let numList = [10, 20, 30, 40, 50];
    let subList = numList.slice(0, 3) // copies from index 0 to index 2 (not 3)
    console.log(subList); // 10,20,30

    subList = numList.slice(-2) // copies last two elements
    console.log(subList); //40 50

    subList = numList.slice(2, -1) // copies elements from index 2 to previous to last element
    console.log(subList); //  30, 40

    let person = { name: 'Sudhir', age: 26 };
    let emp1 = [person, 50, 60];
    let emp2 = emp1.slice(0, 2); // person, 50 --> [{name: 'Sudhir', age: 26}, 50]
    console.log(emp2);

    //Now I change person object
    person.name = 'Sudhir Kumar K ';

    // now both emp1 and emp2 will change
    console.log(person)
    console.log(emp1);
    console.log(emp2);

}

/*
Array.prototype.splice()
This method is used to add/remove one or more items into the array
it returns array of deleted elements
if no elements are deleted , an empty array is returned.
It can be called in 3 ways

array.splice(start)  // deletes elements from start index
array.splice(start, deleteCount) // deletes specified number of elements from start index
array.splice(start, deleteCount, item1, item2, ...) // same as previous one but adds item1, item2, ... at the start index
*/
console.log('slice() & splice()');


{

    let names = ['Ram', 'Gopal', 'Venu', 'Madhav'];

    let subList = names.splice(2); // removes all the items from index 2 
    console.log(names); // Ram, Gopal
    console.log(subList); // Venu, Madhav

    let list2 = ['Ram', 'Gopal', 'Venu', 'Madhav', 'Girish', 'Shiva', 'Mahesh'];
    let sublist2 = list2.splice(2, 3); // from index 2,  3 items will be deleted
    console.log(list2); // Ram, Gopal, Shiva, Mahesh
    console.log(sublist2); // Venu, Madhav, Grish

    let list3 = [20, 30, 40, 50];
    let sublist3 = list3.splice(1, 2, -8, -7); // from index 1 delete 2 items and insert -8,-9 at index 1
    console.log(list3); // 20,-8,-7, 50 --> 

    let list4 = [10, 20, 30, 40, 50];
    let sublist4 = list4.splice(1, 0, 99, 999); // from index 1 delete 0 items and add 99, 999 at index 1
    console.log(list4); // 10 99 999 20 30 40 50

    let list5 = [10, 20, 30, 40, 50];
    let sublist5 = list5.splice(-1, 1, 77, 777); // starting form   last index , remove 1 item and insert 77, 777 
    console.log(list5); // 10, 20, 30, 40,77, 777
    console.log(sublist5); // 50
}