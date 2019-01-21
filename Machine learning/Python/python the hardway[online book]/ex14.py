# Using common prompt for multiple raw_input()

from sys import argv

script , user_name = argv 

prompt = '>>'

print "Hi %r, I am from %r"%(user_name, script)

print "Where do you live?"
lives = raw_input(prompt)

print "What is your qualification"
qual = raw_input(prompt)

print "So, Mr. %s, You live in %s and Your qualification is %s right?"%(user_name, lives, qual)