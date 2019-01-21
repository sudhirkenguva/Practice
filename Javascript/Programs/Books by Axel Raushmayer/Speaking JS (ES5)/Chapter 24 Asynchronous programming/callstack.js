let first = function(x) {
    second(x+1);
};

let second = function(y) {
    third(y+1);
};

let third = function(z) {
    console.log(new Error().stack);
}

first();

