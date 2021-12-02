# ---------Challenge3---------
# input = string from a to z like "abcd" or "abxxz"
# expected op of "abcd" = "A-Bb-Ccc-Dddd"
s = 'abcde'
formatted_result = ''
for index, letter in enumerate(s):
  # print(index)
  result = ''
  for i in range(0, index+1):
    result += f'{letter}'
    print(i, 'hello')
  print(index)
  print(result)
  formatted_result += f'{result.capitalize()}-'

print(result) 
print(formatted_result[:len(formatted_result)-1])