/*
This keyword:

There are 4 cases:
1)Default context
It depends on which context function is called.
When the function is called in global context, this will refer to global object (window object)

2) when function_name.apply(someObj) is called, this inside function_name() will refer to someObj. //explicit binding

3) when a function is member of any object, then 'this' keyword inside that function will refer to that object

4) with new keyword
*/