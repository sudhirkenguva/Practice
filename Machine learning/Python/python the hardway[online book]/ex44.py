# inheritance in python

# Person class

class Person(object):

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def print_msg(self):
        print "Name is %s and age is %d" % (self.name, self.age)


class Employee(Person):
    def __init__(self, name, age, salary):
        super(Employee, self).__init__(name, age)
        self.salary = salary

    def print_msg(self):
        print "Employee Name is %s, Age is %d and Salary is %s" % (self.name, self.age, self.salary)


print 'PERSON CLASS '
print '_' * 20

p1 = Person('Sudhir', 26)
p1.print_msg()

print ''
print 'EMPLOYEE CLASS'
print '_' * 20

e1 = Employee('Sudhir', 30, '50k/pm')
e1.print_msg()
