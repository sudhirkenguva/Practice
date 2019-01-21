# Functions in python
def volume_of_sphere(radius) :
    return (4/3.0)*(3.14)*radius*radius*radius

def area_of_rectangle(length,breadth) :
    print "Area of rectangle is ",(length*breadth),"Units"

def count_args(*args):
    print "No. of arguments = ",len(args)

print volume_of_sphere(5),"Units"
print volume_of_sphere(2),"Units"
print volume_of_sphere(1),"Units"

area_of_rectangle(12,10)

count_args(5)
count_args(5,2)
count_args(5,2,"Sudhir")
count_args(5,3,"abc",True,False)



