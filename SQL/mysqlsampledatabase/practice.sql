
-- Like, limit Operator
select * from employees where firstName like 'a%' order by employeeNumber asc limit 1; 

select * from employees where firstName = 'andy' ; 

select count(employeeNumber) from employees where reportsTo is null;

-- Sorting of data, order by clause
select contactFirstName, contactLastName from customers order by contactFirstName asc,contactLastName desc;

-- Joins
select * from products;
select * from orders;
select * from customers;

-- Cross Join
select orders.comments, customers.customerName
from orders 
inner join customers;


show tables;

select contactFirstName, contactLastName from customers
order by contactFirstName asc, contactLastName desc;

select * from orderdetails;

select orderNumber, priceEach * quantityOrdered as totalPrice from orderdetails
order by totalPrice desc;

select distinct status from orders;

select * from orders order by field(status, 'Shipped','In Process', 'Resolved') asc;
 
 CREATE TABLE t1 (
    id INT PRIMARY KEY,
    pattern VARCHAR(50) NOT NULL
);
 
CREATE TABLE t2 (
    id VARCHAR(50) PRIMARY KEY,
    pattern VARCHAR(50) NOT NULL
);

INSERT INTO t1(id, pattern)
VALUES(1,'Divot'),
      (2,'Brick'),
      (3,'Grid');
 
INSERT INTO t2(id, pattern)
VALUES('A','Brick'),
      ('B','Grid'),
      ('C','Diamond');

select * from t1;
select * from t2;

select t1.id as t1_id, t2.id  as t2_id,t2.pattern from 
t1 right join t2
on t1.pattern = t2.pattern
order by t1_id;


select productName, length(productName) from products
order by length(productName) desc limit 1;

create table employee (
id numeric primary key, 
name varchar(20),
dept_id numeric,
age numeric, 
salary numeric
);

describe employee;

insert into employee (id, name, dept_id, age, salary) values (4,'Gopal',4,28,9);
select * from employee;

create table department (
id numeric primary key, 
name varchar(20),
loc varchar(20)
);

describe department;

insert into department (id,name,loc) values (1,'Finance','Hyd');
insert into department (id,name,loc) values (2,'Development','Hyd');
insert into department (id,name,loc) values (3,'HR','Bangalore');
insert into department (id,name,loc) values (4,'HR','Pune');
insert into department (id,name,loc) values (5,'Development','Mumbai');
select * from department;

select employee.*, department.* from employee, department;

select employee.name, department.name, department.loc from 
employee right outer join department
on employee.dept_id = department.id;


select * from employees;

select concat(m.firstName,' ',m.lastName) as 'Manager', 
concat(e.firstName,' ',e.lastName) as 'Employee'
from employees m inner join employees e
on e.employeeNumber = m.reportsTo;

select * from offices;

select * from employees;

select all the employees working at offices located in USA.

select concat(e.firstName,' ',e.lastName) as 'Employee Name' , o.country from
employees e left join offices o
on e.officeCode = o.officeCode
where o.country = 'USA';


select firstName, lastName from employees
where officeCode in(
select officeCode from offices where country = 'USA');


























