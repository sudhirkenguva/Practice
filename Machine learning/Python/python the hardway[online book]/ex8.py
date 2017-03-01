# we can multiple formatters and re-use them with print statements

formatter = "%r %r %r %r"  # when we use this formatter, we have to give exactly 4 arguments

print formatter % (10,20,30,40)
print formatter % ('Ram','Laxman','Bharat','Satrughna')
print formatter % (True, True, False, True)
print formatter % ("At the end of tunnel, you will definitely see light", 
                    "He said: 'He is OK'",
                    "Are you Ok?",
                    "Will you be alright?")