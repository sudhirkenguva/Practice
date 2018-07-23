-- http://www.mysqltutorial.org/

-- Even though we place the where clause at the end of the query, 
-- mysql first filters the rows based on given where condition, then it filters the columns 

-- 21st May 2018
-- ============================
select country, count(state) from customers group by country; 

select * from customers where country='Austria';

select count(*) - count(state) as 'number of nulls', count(state) as 'not nulls' from customers;

select count(state) from customers;

select employeeNumber, lastName, firstName, jobTitle from employees
where jobTitle != 'Sales Rep'
order by officeCode;

-- Counting values 
select count(*) from customers where addressLine2 is not null ;

-- IN OPERATOR
select * from offices
where state in ( upper('ma'),upper('cA')); 

-- Between operator
select productName, buyPrice, MSRP from products
where buyPrice not between 70 and 90; 

-- ===============================================================================================

-- What is a collation in SQL?
-- Collation refers to a set of rules that determine how data is sorted and compared. 
-- Character data is sorted using rules that define the correct character sequence, 
-- with options for specifying case-sensitivity, accent marks, kana character types and 
-- character width.
