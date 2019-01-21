print "Enter your name ",   #adding comma at the end of print  prevents new line
name = raw_input('---> ')   # The optional argument will be shown on the prompt

print "Enter your organization", 
org = raw_input()

print "Enter your monthly salary",
sal = int(raw_input())   #this function converts accepted argument into integer type

print "Hi %r\n Your company: %r \n Your monthly salary %r\n Your annual salary %d" %(name,org,sal, sal*12)