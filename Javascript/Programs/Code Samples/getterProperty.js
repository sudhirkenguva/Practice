//getter & setter methods for an Object

var myObj={
  get a(){
    console.log('getter method for "a" is called');
    return 2;
  }
}

Object.defineProperty(myObj,"b",{
  
  get: function() {
    return this.a*2;
  }
});

myObj.a=50;    //Even if we set value 50, still we get 2 for property 'a'
console.log(myObj.a);
console.log(myObj.b);

myObj.z=299;
console.log(myObj.z); 

