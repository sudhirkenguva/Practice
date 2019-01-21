// Ways of converting different values to numbers in JS
// GENERAL EXPECTATIONS
// boolean : true false --> 1 or 0
// null : 0
// undefined : NaN
// '94.023' : 94.023

let val = undefined;

console.log(val, typeof(val), '-----INPUT');

// console.log(+val, typeof(+val));

// console.log(val * 1, typeof(val * 1));

// console.log(val / 1, typeof(val / 1));

console.log( Number(val), typeof(Number(val)));

console.log( parseFloat(val), typeof(parseFloat(val)));


// SUMMARY
// Number is more intelligent than parserFloat.
// parseFloat --> converting to string, the converted string 
// is parsed into number.
// true --> 'true',  null --> 'null' NaN --> 'NaN'



