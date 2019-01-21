var sampleObj = {
  height: 20,
  weight: 500
};
console.log(Object.getOwnPropertyDescriptor(sampleObj, "weight"));


//Output:
// configurable 	true
// enumerable 	true
// value 	500
// writable 	true