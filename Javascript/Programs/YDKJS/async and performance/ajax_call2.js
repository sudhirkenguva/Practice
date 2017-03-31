function getDate(url) {
    return new Promise(
        (resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', url)
            xhr.send();
            xhr.onload = function() {
                if (xhr.status === 200) {
                    resolve(xhr.response)
                } else {
                    reject(xhr.responseText + xhr.status)
                }
            }
        });
}

function call() {
    getDate('https://jsonplaceholder.typicode.com/users89').then(
            (result) => {
                document.getElementById('response1').innerText = result;
            })
        .catch((err) => {
            document.getElementById('response4').innerText = 'catch2' + err;
        })
        .then((abc) => { document.getElementById('response3').innerText = abc + '2nd then'; });
}