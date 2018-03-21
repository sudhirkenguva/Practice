//Promise creation
let myPromise = new Promise(
    (resolve, reject) => {
        reject(76);
    });

// Promise usage

myPromise.then(
    (result) => {
        console.log('Result', result);
    },
    (err) => {
        console.log('err', err)
    });