class Person {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age =  age
    }
}

class Employee extends Person {
    salary: number

    constructor(name:string, age: number, salary: number) {
        super(name, age)
        this.salary = salary
    }

    putInfo() {
        console.log(`Employee Details are:\nName: ${this.name}\nAge: ${this.age}\nSalary: ${this.salary}`)
    }
}

let emp = new Employee('Sudhir',26,5000)
emp.putInfo();