from sys import argv
script, file_name = argv

print "Selected file_name is:",file_name

file_obj= open(file_name)
file_content = file_obj.read()

print "FILE CONTENT IS \n",file_content