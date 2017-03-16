// using minimist (a command line parser)

let args = require("minimist")(process.argv.slice(2), { string: "name,address", boolean: "active" });

let name = args.name;
let address = args.address;
let active = args.active;
console.log("Name:  " + name);
console.log("Address:  " + address);
console.log("Active:  " + active);


console.log('List of all arguments');
console.log(JSON.stringify(args));