#String pallindrome

msg = 'xxx'
rev = reversed(list(msg))
rev = list(rev)
rev = ''.join(rev)
print msg
print rev

if msg == rev:
    print 'Yes'
else:
    print 'No'