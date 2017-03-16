var myObject = {
    a: 2
};

myObject.a = 3;
myObject.a;                 // 3

Object.defineProperty( myObject, "a", {
    value: 4,
    writable: true,
    configurable: false,    // not configurable!
    enumerable: true
} );

myObject.a;                 // 4
myObject.a = 5;
myObject.a;                 // 5

// Object.defineProperty( myObject, "a", {
//     value: 6,
//     writable: true,
//     configurable: true,
//     enumerable: true
// } ); // TypeError
/*
Exception: SyntaxError: invalid property id
@Scratchpad/2:6
*/
/*
Exception: TypeError: can't redefine non-configurable property "a"
@Scratchpad/2:19:1
*/