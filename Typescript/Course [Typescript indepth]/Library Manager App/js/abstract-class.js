var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/*
Abstract classes cannot be instantiated
They are used as base classes
They may or may not contain method implementations.
Functions with no implementations are called Abstract methods

Abstract classes same as interfaces but here, some methods may contain implementations
*/
{
    var Person_1 = (function () {
        function Person_1() {
        }
        return Person_1;
    }());
    var Employee_1 = (function (_super) {
        __extends(Employee_1, _super);
        function Employee_1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Employee_1.prototype.get = function (name, age, salary) {
            this.name = name;
            this.age = age;
            this.salary = salary;
        };
        Employee_1.prototype.print = function () {
            console.log("\nName: " + this.name + "\nAge: " + this.age + "\nMonthly Salary:" + this.salary + "\nYearly Salary: " + this.salary * 12);
        };
        return Employee_1;
    }(Person_1));
    var emp_1 = new Employee_1();
    emp_1.get('Sudhir', 26, 50000);
    emp_1.print();
}
//# sourceMappingURL=abstract-class.js.map