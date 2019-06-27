let str = '2x + 3y + 5';
let x = 10, y = 20;
function evaluate(str,x,y) {
    let str2 = str.replace('x','*('+x+')');
    let str3 = str2.replace('y','*('+y+')');
    console.log(str3);
    return eval(str3);
}

console.log(evaluate(str,x,y));