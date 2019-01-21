let a = "Sudhir";
let b = new String("Sudhir");

let c = new Undefin

a.info = "This is some sample info";
b.info = "This is some sample info";
b.length = 2;

console.log(b.length,"length of b");

a.length;


console.log(typeof(a), typeof(b));

console.log(a.info,b.info);


let n = new Number(25);

n.valueOf = function() {
    return 'I am tweaked value';
}

console.log(n);
console.log(n.valueOf());

console.log(n + 20);

let c = new Boolean(false);

console.log(c,c.valueOf());
if(c == false) {
    console.log('c is true');
} else {
    console.log('c is false');
}



