/*
Destructuring
*/

{
    console.log('Snippet name [Destructuring]')
    let a= [1,2,3,4,5]
    let [first, second, ...rest]=a
    console.log(first)
    console.log(second)
    console.log(rest)

first = a[0];
second = a[1];
// swap variables
[first, second] = [second, first]

console.log(first)
console.log(second)
}