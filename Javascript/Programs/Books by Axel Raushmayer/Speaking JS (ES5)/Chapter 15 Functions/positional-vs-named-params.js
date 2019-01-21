// printSeries(1,20,3); // start, stop, step.

// printSeries(start=1, stop=20, step=3); // Python. 

// The advantage with named params is, this approach more descriptive, it tells the name of
// each param during function call, so its less confusing.
// 2nd point is , the order of params in function call is not mandatory anymore. 

// In JS with help of object literals, we can mimic this feature.

printSeries({})

function printSeries(obj) {
    let options = obj || {};
    let start = options.start || 1;
    let end = options.end || 100;
    let step = options.step || 1;
    for(let i = start; i<= end; i+=step) {
        console.log(i);
    }
}