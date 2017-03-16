import sys

secured_per = float(raw_input("Enter your secured percentage.."))

if(secured_per > 100 or secured_per < 0) :
    print 'Invalid percentage'
    sys.exit(1)

if ( secured_per < 30) :
    print "Sorry, You are Fail."
elif secured_per < 50 :
    print "Third Division"
elif secured_per < 60 :
    print "Second Division"
else :
    print "Great!!! You are first Division"