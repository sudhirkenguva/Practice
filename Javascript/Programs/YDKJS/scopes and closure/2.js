//  if any RHS reference to  a variable fails, it results typeError, 
// but when any LHS reference to a variable fails, 
// global variable with that name will be silently created.(if strict mode is not used)

function test(a) {
    b = a;
    console.log('b =', b);
    console.log(b + c);
}


test(5);


// In the above code, in test(), both b and c are not available.
// lets talk about b first, 
//    b is not found, in this function scope, so engine will looks at next higher scope , still not found,
//    and b is LHS reference, so b is silently created at global scope.(with default value 'undefined')
//  But in case of c, it is also not found in the scope of test() or at higher scope, 
//  and c is in RHS reference, so its a referenceError