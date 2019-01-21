/*
Generics are used to write type (data type) independent code
Generics can be generic functions, classes , interfaces etc
They take, type as parameters during function invocations or object creation
*/
// Generic function
function removeFirstTwo(tempArr) {
    return tempArr.slice(2, tempArr.length);
}
console.log(removeFirstTwo(['India', 'America', 'Russia']));
console.log(removeFirstTwo([1, 2, 3, 4, 5, 6]));
console.log(removeFirstTwo([true, false, true, true]));
console.log(removeFirstTwo([true, 2, true, 45.67]));
//# sourceMappingURL=generics.js.map