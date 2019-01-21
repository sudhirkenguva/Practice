{
    console.log('----------> Snippet Name [number systems]');
    var decNum = 55;
    var hexNum = 0xff;
    var binNum = 3;
    var octNum = 8;
    console.log('Decimal number is ' + decNum);
    console.log('HexNum number is ' + hexNum);
    console.log('Binary number is ' + binNum);
    console.log('Octal number is ' + octNum);
    console.log('Hex Format --> ' + decNum.toString(16));
    console.log('Octal Format --> ' + hexNum.toString(8));
    console.log('Binary Format --> ' + decNum.toString(2));
}
{
    console.log('---------> snippet name [Tuples]');
    var a = void 0;
    a = [5, 'India'];
    console.log(a[0]);
    console.log(a[1].toUpperCase());
}
{
    console.log('---------------> snippet name [enum]');
    var Color;
    (function (Color) {
        Color[Color["red"] = 0] = "red";
        Color[Color["green"] = 1] = "green";
        Color[Color["blue"] = 2] = "blue";
    })(Color || (Color = {}));
    var favColor = void 0;
    favColor = Color.green;
    console.log(favColor);
    console.log(Color[favColor]);
    console.log(Color[2]);
    var Dept;
    (function (Dept) {
        Dept[Dept["civil"] = 13] = "civil";
        Dept[Dept["mechanical"] = 14] = "mechanical";
        Dept[Dept["electrical"] = 15] = "electrical";
    })(Dept || (Dept = {}));
    var myDept = void 0;
    myDept = Dept.electrical;
    console.log(myDept);
    var Sub;
    (function (Sub) {
        Sub[Sub["english"] = 34] = "english";
        Sub[Sub["hindi"] = 56] = "hindi";
        Sub[Sub["oriya"] = 92] = "oriya";
        Sub[Sub["maths"] = 88] = "maths";
    })(Sub || (Sub = {}));
    var mySub = Sub.maths;
    console.log(mySub);
}
{
    console.log('-------------------> snippet name [any]');
    var a = void 0;
    a = 5;
    console.log(a);
    a = 'TS is great';
    console.log(a);
    a = true;
    console.log(a);
}
{
    console.log('------------------> snippet name [void]');
    function printMsg() {
        console.log('Journey Started!!!!!!');
    }
    printMsg();
    var b = void 0;
    b = null;
    console.log(b);
    b = undefined;
    console.log(b);
}
{
    console.log('------------> Snippet name [never]');
    function abc() {
        while (true) {
            console.log('I am going on');
        }
    }
}
{
    console.log('-------------> snippet name [type casting]');
    var a = void 0;
    a = "Do or Die";
    console.log(a.length);
    console.log(a.toUpperCase());
}
