


interface Employee {
    name: string;
    monthly_income: number;
}

function printInfo(emp: Employee) {
    console.log('Name is '+emp.name);
    console.log('Yearly Income '+(emp.monthly_income*12));
}


printInfo({monthly_income: 10, name: "John"});

