{
    console.log('Snippet name [Destructuring]');
    var a = [1, 2, 3, 4, 5];
    var first = a[0], second = a[1], rest = a.slice(2);
    console.log(first);
    console.log(second);
    console.log(rest);
    first = a[0];
    second = a[1];
    _a = [second, first], first = _a[0], second = _a[1];
    console.log(first);
    console.log(second);
}
var _a;
