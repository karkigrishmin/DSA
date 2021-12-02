#--------------Challenge7----------
# input = array with atleast 3 numbers and all numbers are same except one
# output = return unique number
numbers = [1, 1, 2, 1, 1]
unique_numbers = set(numbers)

for num in unique_numbers:
  if numbers.count(num) > 1:
    # print(numbers[i])
    continue
  print(num)
  
