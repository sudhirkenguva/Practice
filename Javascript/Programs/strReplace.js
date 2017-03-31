//string.prototype.replace() used replace characters of a string that match with given chars or regular expression

let strArr = ['0 ab',
    '6 cd',
    '0 ef',
    '6 gh',
    '4 ij',
    '0 ab',
    '6 cd',
    '0 ef',
    '6 gh',
    '0 ij',
    '4 that',
    '3 be',
    '0 to',
    '1 be',
    '5 question',
    '1 or',
    '2 not',
    '4 is',
    '2 to',
    '4 the'
];

str2 = strArr.map(function(val) {
    return val.replace(/[a-z]+/, '-')
});

console.log(str2);