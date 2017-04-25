var person = {
    firstName: 'Sudhir',
    lastName: 'Kumar',
    fullName: function() {
        console.log(this.firstName, this.lastName);
        console.log(person.firstName, person.lastName);
    }
}


person.fullName();