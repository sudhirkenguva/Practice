/*
Input: Amount to be withdrawn in whole number
Output: Minimum number of notes required to withdraw the amount, count of notes in each denomination. 
Info: Available denominations: 1, 2, 5, 10, 20, 50, 100, 200, 500, 2000
*/

function getMoney(amount) {
    var denominations = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
    var notes = [], noteCount, noteValue, totalCount = 0;
    denominations.forEach(function (den) {
        noteCount = Math.floor(amount / den);
        totalCount += noteCount;
        noteValue = den;
        amount = amount % den;
        notes.push({ noteValue: noteValue, noteCount: noteCount });
    });
    return {notes:notes,totalCount:totalCount};
}


console.log("++++++++++++++++ for the amount 4560 ++++++++++++++");
console.log(getMoney(4560));

console.log("\n\n\n\n++++++++++++++++ for the amount 560 ++++++++++++++");
console.log(getMoney(560));


