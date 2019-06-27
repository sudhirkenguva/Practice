var a = (function abc() {
    console.log(arguments);
    function inner() {
        console.log("Inner Function Called");
    }
    return {
        inner : inner
    }
})(5, 10);
