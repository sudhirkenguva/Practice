function scopeTest() {
    console.log(a);
    var t = true;
    if (t) {
        var a = 'first message';
        var b = 'second message';
    }
    console.log(a);
}
scopeTest();
//# sourceMappingURL=scopeTest.js.map