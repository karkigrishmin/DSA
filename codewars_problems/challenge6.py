# -------------Challenge6----------
# input = 9(3^2)
# output = 16(4^2)
sq = 8
import math
sq_root = math.sqrt(sq)
if(sq_root ** 2 == sq):
  sq_root += 1
  print(sq_root ** 2)
else:
  print('not perfect square')
# print(math.sqrt(9)) 
# print((math.sqrt(9) + 0.5) ** 2)
# print((math.sqrt(121)))

# another way
# user_input = int(input('Enter a number'))
# print(user_input)
# root = user_input ** 0.5
# if root.is_integer():
#   print((root + 1) ** 2)
# # return -1
# # print(root.is_integer())
# print(root)