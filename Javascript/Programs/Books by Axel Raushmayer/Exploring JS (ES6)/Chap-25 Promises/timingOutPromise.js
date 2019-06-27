
var asyncTimer = function (milli) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve();
        }, milli);
    })
};

asyncTimer(2000)
    .then(() => {
        console.log("Done...............");
    });
console.log("Waiting................");