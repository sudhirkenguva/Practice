console.log('Array iteration explicitly using its iterator');
let arr = [4, 5, 6, 7, 8, 9];
let itr = arr[Symbol.iterator]();
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());

//The above logic can be implemented through a normal loop
console.log('Iterating through a while loop');
let arr1 = ['I', 'Love', 'JS'];
let itr1 = arr1[Symbol.iterator]();
let obj;
while (!(obj = itr1.next()).done) {
    console.log(obj.value);
}
console.log('Array iteration using for-of loop (which iternally uses its iterator)');
let arr2 = [4, 5, 6, 7, 8, 9];
for (elem of arr2) {
    console.log(elem);
}