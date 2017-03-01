'use strict';
var cat ={
  name:' fluffy',
  color:' brown'
}

console.log(Object.getOwnPropertyDescriptor(cat,"name"));

Object.defineProperty(cat,'name',{
  writable:false
});

console.log(Object.getOwnPropertyDescriptor(cat,"name"));


cat.name="Tom";
/*
Exception: TypeError: "name" is read-only
@Scratchpad/1:16:1
*/