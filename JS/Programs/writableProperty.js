"use strict"

var sampleObj = {
  weight: 500
};


Object.defineProperty(sampleObj,"height", {
  value: 150,
  configurable: true,
  writable: false,  //Its readonly  
  enumurable: true    
}) ;

console.log(sampleObj.height); //150

sampleObj.height= 200; //Shows error in "strict mode", and in normal mode, no error but old value only stored.

console.log(sampleObj.height); //150
/*
Exception: TypeError: "height" is read-only
@Scratchpad/1:17:1
*/