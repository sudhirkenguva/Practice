let xhttp = new XMLHttpRequest();
document.getElementById('flag').innerText = 'Before Call'


xhttp.open('GET', 'https://jsonplaceholder.typicode.com/users/1', true)
xhttp.send()

document.getElementById('flag').innerText = document.getElementById('flag').innerText + ' --> After Call1'
document.getElementById('flag').innerText = document.getElementById('flag').innerText + ' --> After Call2'
document.getElementById('flag').innerText = document.getElementById('flag').innerText + ' --> After Call3'


xhttp.onload = function() {
    // console.log(xhttp.responseText)
    document.getElementById('response').innerText = xhttp.responseText
    document.getElementById('status').innerText = xhttp.readyState
    document.getElementById('flag').innerText = document.getElementById('flag').innerText + ' --> Inside call'

};