numList = [1,2,3,4]
wordList = ['Apple','Basket','Cat','Dumbell','Elephant']
mixedList = [1,'Two','Three',4,5,True,False]

print "Content of num list"
for n in numList:
    print "Number is : %d" % n

for w in wordList:
    print "Word is : %s" % w

for item in mixedList:
    print "Item is : %r" % item


# Creating lists
numList2 = []

for i in range(20,31):
    numList2.append(i)

print numList2
