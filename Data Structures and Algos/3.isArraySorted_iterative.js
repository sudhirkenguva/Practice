// Check whether the given array is sorted or not using a iterative function. 
let arr = [10, 20, 30, 4, 50];
function isArraySorted(arr) {
    let isSorted = true;
    for (let i = 0; i < arr.length - 2; i++) {
            if (arr[i] > arr[i+1]) {
                isSorted = false;
                break;
            }
    }
    return isSorted;
}

console.log(isArraySorted(arr));
