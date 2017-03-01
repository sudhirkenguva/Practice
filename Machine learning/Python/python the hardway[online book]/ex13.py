# command line arguments (arguments to the script)

from sys import argv  # importing argument vector (feature) from sys library/module
                      # We will import features from modules

first, second, third, fourth = argv  # Unpacking argument vector

print "Command line arguments ",argv

print "First argument is",first
print "Second argument is",second
print "Third argument is",third
print "Fourth argument is",fourth

