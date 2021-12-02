# --------------Challenge8----------
# find the minimum and maximum element of an array
# input = [1, 2, 3, 4]
# output = 4 is max and 1 is min
numbers = [6, 7, 1, 8, 10]
min = max = numbers[0]

for num in numbers:
  if(num > max):
    max = num
  elif(num < min):
    min = num
print(f'max is {max} and min is {min}')