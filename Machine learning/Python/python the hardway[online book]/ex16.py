from sys import argv

script, filename = argv

print "Opening the file %r",filename
file_obj = open(filename,"w")

print "Truncating the file %r",filename
file_obj.truncate()

print "Enter 3 lines for the file"
line1 = raw_input("Enter 1st line")
line2 = raw_input("Enter 2nd line")
line3 = raw_input("Enter 3rd line")

file_obj.write(line1)
file_obj.write("\n")

file_obj.write(line2)
file_obj.write("\n")

file_obj.write(line3)
file_obj.write("\n")

print "Saving the file %r",filename
file_obj.close()

print "Opening the file in read mode"
file_obj = open(filename)

print "Reading the file content"
file_line = file_obj.readline();
file_content = file_obj.read()


print "File line \n"
print file_line
print "FILE CONTENT \n"
print file_content