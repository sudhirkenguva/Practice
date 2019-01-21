function h(z) {
    // Print stack trace
    console.log(new Error().stack); // (A)
}

function g(y) {
    h(y + 1); // (B)
}

function f(x) {
    g(x + 1); // (C)
}
f(3); // (D)
return; // (E)