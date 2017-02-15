var myObj={
  get a(){
    console.log("Getter method is called");
    return this._a_;
  },
  
  set a(val){
  console.log("Setter method is called");
  this._a_ = val;
}
};

// _a_ is just a convention, we can use any name as medium between get() & set()
myObj.a=50;
console.log(myObj.a);
