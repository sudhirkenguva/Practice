var HelloWorld = (function () {
    function HelloWorld(msg) {
        this.msg = msg;
        this.msg = 'Hello ' + msg;
    }
    return HelloWorld;
}());
var obj = new HelloWorld("Sudhir");
console.log(obj.msg);
//# sourceMappingURL=app.js.map