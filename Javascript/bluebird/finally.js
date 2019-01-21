var Promise = require('bluebird');

Promise.resolve()
.then(() => {
throw new Error('MY ERROR');
})
.then(() => {
console.log('IN THEN AFTER ERROR');
})
.finally(() => {
console.log('IN FINALLY')
})
.then(() => {
console.log('IN THEN AFTER FINALLY');
})
.catch(() => {
console.log('IN CATCH AFTER FINALLY');
});