let deptStr = '"ab\'c","p,q\'r","xy\'z"'
let deptArr = deptStr.split(',"');
let deptArr2 = deptArr.map((element) => {
    return element.replace('"', "'");
});

let deptArr3 = deptArr2.map((element) => {
    let item = element.substr(1, element.length - 1);
    return item.replace("'", "''");
})

console.log(deptArr3);