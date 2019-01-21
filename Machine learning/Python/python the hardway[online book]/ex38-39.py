# Lists and Dictionaries
# Lists can contain same or different data typed values
# Which can be accessible through indices (numbers starting from 0)

sample_list = [2,3,4,'India','America',True, False,23.45]

for item in sample_list:
    print "Item is %r" %item


# Dictionaries are same as lists, but we access its elements through keys (rather than indices)
# These are used for associating values with keys

state_abbr = {
    'Odisha':'OR',
    'Telengana': 'TS',
    'Andhra Pradesh': 'AP',
    'Tamil Nadu': 'TN'
}

print "Abbreviation for Andhra Pradesh is %s" % state_abbr['Andhra Pradesh']
print "length of state_abbr is: %d " % len(state_abbr)