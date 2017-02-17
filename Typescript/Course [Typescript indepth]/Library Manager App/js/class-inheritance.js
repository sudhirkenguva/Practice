var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Person = (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
var Employee = (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, salary) {
        var _this = _super.call(this, name, age) || this;
        _this.salary = salary;
        return _this;
    }
    Employee.prototype.putInfo = function () {
        console.log("Employee Details are:\nName: " + this.name + "\nAge: " + this.age + "\nSalary: " + this.salary);
    };
    return Employee;
}(Person));
var emp = new Employee('Sudhir', 26, 5000);
emp.putInfo();
//# sourceMappingURL=class-inheritance.js.map