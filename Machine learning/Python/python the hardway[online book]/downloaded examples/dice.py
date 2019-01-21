import random
class Die(object):
  def __init__(self, sides):
    self.sides = sides
  def roll(self):
    return random.randint(1, self.sides)

d = Die(6)
d1 = Die(6)
print d.roll(), d1.roll()