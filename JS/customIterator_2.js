var randoms = {
  [
    Symbol.iterator
  ]: function () {
    return {
      next: function () {
        return {
          value: Math.random()
        };
      }
    };
  }
};

var randoms_pool = [ ];

for (var n of randoms) {
  randoms_pool.push(n);
  // don't proceed unbounded!
  if (randoms_pool.length === 100) break;
}

for (i=0;i<100;i++)
  console.log(Math.floor(randoms_pool[i]*10));
