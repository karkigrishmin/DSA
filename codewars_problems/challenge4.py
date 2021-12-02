# -----------------Challenge4-------------------
# input = [1, 2, 3, 4]
# output = 1^2 + 2^2 + 3^2 + 4^2 = 30
numbers = [1, 2, 3, 4]
sum = 0
for num in numbers:
  sum += num ** 2
print(sum)  