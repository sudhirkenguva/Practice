let sum = function(a,b,c) {
    a = a || 0;
    b = b || 0;
    c = c || 0;
    console.log(arguments);
    console.log(a + b + c);
}

sum(1,2,3);

sum.call(null,1,2,3);
sum.apply(null,[1,2,3]);

sumBound = sum.bind(null,1000);
sumBound(200,300);