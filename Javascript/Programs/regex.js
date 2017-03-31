// MDN site
/*
These are the patterns used to match the character combinations of strings.
These are also objects in Javascript

These objects work with 
    exec & test methods of RegExp
    match, search, replace and split methods of strings
*/

let re = /a+sa/g //Matches one or more a's followed by b
let text = 'aasababaasabbabbpqr'
let result = text.match(re)
console.log(result)

// . (dot) will match any character (except newline)
let re2 = '/^a.bc$'
let text2 = 'aabcaaabcaazbc'
let result2 = text2.match(re2)
console.log(result2)

var re3 = /...[.]...[.]...[.].../g;

let text3 = 'abc.def.ghi.jkl'
let text4 = 'abcd.def.ghi.jkl'

let result3 = text3.match(re3)
let result4 = text4.match(re3)

console.log(result3)
console.log(result4)

console.log('x4202v2A22A9a6aaaaaa2G2222m222qwertyYuIo13957'.length)