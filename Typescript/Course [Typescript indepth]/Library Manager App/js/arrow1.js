{
    var arr = [1, 2, 3, 4, 5];
    console.log('1st arrow funtion');
    arr.forEach(function (item) {
        console.log(item);
    });
    console.log('2nd arrow funtion');
    arr.forEach(function (item, index) {
        console.log(item + '---' + index);
    });
    console.log('3rd arrow funtion');
    arr.forEach(function (item, index, arr) {
        console.log(item + '---' + index + '---' + arr);
    });
}
//# sourceMappingURL=arrow1.js.map