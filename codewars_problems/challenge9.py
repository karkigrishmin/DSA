# ---------Challenge9------------
# find an index N in a list where sum of integers to the left of N is-
# equal to the sum of integers to the right of N
numbers = [1,2,3,1]
positions = []
min = 999999;
for i in range(len(numbers)):
  sum_left = 0
  sum_right = 0
  print('loop1')
  if i != 0:
    for k in range(i):
      sum_left += numbers[k]
      print('sum_left', sum_left)
  

  for j in range(i+1,len(numbers)):
    sum_right += numbers[j]
    print(sum_right) 
    print('loop2')
    
  if(sum_right == sum_left):
    positions.append(i)
 
if(len(positions) > 1):
  for pos in range(len(positions)):
    if(positions[pos] < min):
      min = positions[pos]
  print(min)
elif(len(positions) == 1):
  min = positions[0]
  print(min)
else:
  print( -1)