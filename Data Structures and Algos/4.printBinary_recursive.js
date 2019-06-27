// Print all the binary strings of given length using a recursive function
let bString = [];
function printBinaryStrings(n) {
    if (n < 1) {
        console.log(bString.join(" "));
    } else {
        bString[n - 1] = 0;
        printBinaryStrings(n - 1);
        bString[n - 1] = 1;
        printBinaryStrings(n - 1);
    }
}

printBinaryStrings(3);