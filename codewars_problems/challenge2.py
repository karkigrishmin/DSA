# -----------Challenge2-------------
# input = a to z
# expected op = numerator/denominator i.e 0/10 or 2/10 
# where numerator represents the error while denominator represents the length-
# of string
err_count = 0
s = 'xxxazzqqqbz'
colors = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm']
for letter in s:
  if(letter in colors):
    pass
  else:
    err_count += 1;

print(f'{err_count}/{len(s)}')
print(len(s))