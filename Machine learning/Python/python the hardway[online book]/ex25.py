# pop, remove, delete, sorted, split methods on lists

# pop(index) removes the element at given index from the  and returns the removed element
# when no index is supplied, it removes the last element

# remove() deletes the 1st occurance of value (it will not take index as argument, it takes element value as argument)

# del also removes the element at specific index but does not return value

# sorted(list) it returns the list with elements in sorted order (will not modify the original list)

""" This is a simple script to try some list related methods """

sentence = "This is a sample line of text"
words = sentence.split()
print words

first_word = words.pop(0)
print "First Word:",first_word

last_word = words.pop()
print "Last Word:",last_word

print "Word List:",words

del words[2]
print "Word List:",words

words.remove('line')  # delete by value
print "Word List:",words

print sorted(words)

print "Word List:",words

