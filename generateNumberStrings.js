let nextNum = function(numArg) {
    var num = numArg.split("");

    let lastDigit = num.pop();
    if (lastDigit != '9') {
        lastDigit = (Number(lastDigit) + 1) + '';
        num.push(lastDigit);
    } else {
        let count9 = 1;
        lastDigit = num.pop();
        while (lastDigit == '9') {
            count9++;
            lastDigit = num.pop();
        }
        num.push(Number((lastDigit || 0) + 1) + '');
        while (count9 > 0) {
            num.push('0');
            count9--;
        }
    }

    return num.join("");
}

console.log(nextNum('100000099'));