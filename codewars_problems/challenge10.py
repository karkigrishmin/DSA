# ---------Challenge10-----------
# return true if the first argument(string) ends with the 2nd argument(string)
# example
# solution('abc', 'bc') # returns true
# solution('abc', 'd') # returns false
def solution(string, ending):
  if(string[-len(ending)::] == ending[::] or ending == ''):
    return True
  return False

print(solution('abcde', 'bcde'))