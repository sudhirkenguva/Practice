var Arr = [
  1,
  2,
  3
];

var it_obj= Arr[Symbol.iterator]();
var temp_obj;

temp_obj=it_obj.next()  // {value:1, done:false}
console.log(temp_obj);

temp_obj=it_obj.next()  // {value:2, done:false}
console.log(temp_obj);

temp_obj=it_obj.next()  // {value:3, done:false}
console.log(temp_obj);

temp_obj=it_obj.next()  // {value:undefined, done:true}
console.log(temp_obj);
