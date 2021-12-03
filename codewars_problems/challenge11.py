# ------------challenge11---------
# we have to remove all the vowels from the string and return a new string
# For example, the string "This website is for losers LOL!" 
# would become "Ths wbst s fr lsrs LL!". 
def remove_vowel(string):
  new_string = ''
  for i in range(len(string)):
    if(string[i].lower() in ['a', 'e', 'i', 'o', 'u']):
      # print(string[i])
      continue
    new_string += string[i]
  return new_string

print(remove_vowel('Hello I am grishmin'))