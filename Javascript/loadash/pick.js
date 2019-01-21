var _ = require('lodash');

var obj = {
    name: 'Sudhir',
    role: 'SE',
    city: 'Hyderabad'
};

var obj2 = _.pick(obj,'name','city');

console.log(obj2);
