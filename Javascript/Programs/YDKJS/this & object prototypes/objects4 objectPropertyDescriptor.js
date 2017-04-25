"use strict"
let job = {
    doj: '22-04-2017',
    desig: 'finance assistant',
    org: 'Google'
}

console.log(Object.getOwnPropertyDescriptor(job, "doj"));

Object.defineProperty(job, "org", {
    configurable: false
});

job.org = 'Facebook'; // silently ignore, in strict mode, it will be type error

console.log(job)

Object.defineProperty(job, "org", {
    writable: false
});

job.org = 'Microsoft'
console.log(job)