# Copying contents of one file to other

from sys import argv

script, source_file, dest_file = argv

print "Getting source data from %r..." %(source_file)
source_data = (open(source_file).read())

print "Size of source data is %d bytes" %(len(source_data))

print "Opening destination file (in write mode)..."
dest_file_obj = open(dest_file,"w")

print "Writing conents to destination file  %r" %(dest_file)
dest_file_obj.write(source_data)
dest_file_obj.close()
print "Content copied"

dest_file_obj = open(dest_file)
print "Destination file content\n\n"
print dest_file_obj.read()

dest_file_obj.close()



