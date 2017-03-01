# file handling in python

# multiword file names must be enclosed within double quotes (not single quotes)

from sys import argv

script, file_name = argv

file_obj = open(file_name)
file_text = file_obj.read()

print "File name is",file_name
print "File content is : ",file_text

file_obj.close()

