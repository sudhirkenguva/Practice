/*
Abstract classes cannot be instantiated
They are used as base classes
They may or may not contain method implementations.
Functions with no implementations are called Abstract methods

Abstract classes same as interfaces but here, some methods may contain implementations
*/
{

abstract class Person {
    name: string
    age: number

    abstract print () : void 
}

class Employee extends Person {
    salary: number
     get(name: string, age: number, salary: number) {
        this.name = name
        this.age = age
        this.salary = salary
    }

    print() {
        console.log(`\nName: ${this.name}\nAge: ${this.age}\nMonthly Salary:${this.salary}\nYearly Salary: ${this.salary*12}`)
    }
}


let emp = new Employee()
emp.get('Sudhir',26,50000)
emp.print()
}

