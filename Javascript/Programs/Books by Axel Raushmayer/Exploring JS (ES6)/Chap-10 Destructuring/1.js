let obj = {
    firstName: 'Sudhir',
    lastName: 'Kenguva'
};


let {firstName,lastName = "",middleName=""} = obj;
console.log(firstName, lastName, middleName);
