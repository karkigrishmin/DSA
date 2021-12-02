# -------Challenge1---------
# user input = mobile number, 9865024214
# output = NineEightSixFive.....
mob_num = '9865024214'
num_dict = {
  '0': 'zero',
  '1': 'one',
  '2': 'two',
  '3': 'three',
  '4': 'four',
  '5': 'five',
  '6': 'six',
  '7': 'seven',
  '8': 'eight',
  '9': 'nine'
}
result = ''
for num in mob_num:
  result += num_dict[num]
print(result)
