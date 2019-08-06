// --> The keyword 'async' before a function, simply means it will return a promise.
// --> Even when a function returns normal values it will be converted into a promise.


async function delayedMsg() {
    let Promp = new Promise(function (resolve, reject){
        setTimeout(() => {
            resolve('Message not before 2 seconds');
        }, 2000);
    });
    let result = await Promp
    console.log(result);
    return result;
    
}

delayedMsg().then(function(result){
    console.log("Result in then:::::::::::::::",result);
});