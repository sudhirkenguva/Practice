// Check whether the given array is sorted or not using a recursive function. 

let arr = [10,20,30,40,50]; 

function isArraySorted(arr,n) {
    if(n < 2) {
        return true;
    } else {
        if(arr[n-2] > arr[n-1]) {
            return false;
        } else {
            return isArraySorted(arr,n-1);
        }
    }
}

console.log(isArraySorted(arr,arr.length));