for (var i = 1; i <= 5; i++) {
  
  setTimeout(function timer() {
    console.log(i + 'first');
  }, 0);
  
  console.log(i + 'Xyz');
  
  setTimeout(function timer() {
    console.log(i + 'second');
  }, 0);
  
}
