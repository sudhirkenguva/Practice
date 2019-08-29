var totalSum = 0;
function sum(a) {
    console.log(arguments)
totalSum += a; 
console.log(totalSum);
return 1;
}



sum(5)(6)(10);