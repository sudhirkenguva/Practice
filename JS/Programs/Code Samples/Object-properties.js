var myArray=['Sudhir' , '25', 'India'];

console.log(myArray[0]);

console.log(myArray[1]);

console.log(myArray[2]);

myArray["Zoo"] = "Squirrel";

myArray["Role"]="Developer";

myArray["Exp"] = "6 months";

console.log(myArray.length);
console.log(myArray.Role);
console.log(myArray["Role"]);


//myArray.length=20;

console.log(myArray.length);

for(let i in myArray)
  {
    console.log('myArray['+ i +'] ' + myArray[i]);
  }