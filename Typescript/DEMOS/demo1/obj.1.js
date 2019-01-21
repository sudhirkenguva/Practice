function printInfo(emp) {
    console.log('Name is ' + emp.name);
    console.log('Yearly Income ' + (emp.monthly_income * 12));
}
printInfo({ monthly_income: 10, name: "John" });
