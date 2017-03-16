# Creating classes in python

class Person(object):
    # This is a constructor
   def __init__(self,name):
        print "Constructor called..."
        self.name = name
        
   def print_name(self):
        print self.name



p1 = Person('Sudhir')
p1.print_name()