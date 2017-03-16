var Person = {
  firstName:'Albert',
  lastName: 'Einstein'
}


Object.defineProperty(Person,'fullName',{
  get: function(){
    console.log('Getter Called for '+ JSON.stringify(this));
    return this.firstName + ' ' + this.lastName;
  },
  
  set: function(value){
    console.log('Setter called for '+ JSON.stringify(this));
    var temp= value.split(' ');
    this.firstName= temp[0];
    this.lastName= temp[1];
  }   
});

console.log(Person.fullName);

Person.fullName='Isaac Newton';

console.log(Person.fullName);



