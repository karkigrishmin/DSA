# --------Challenge5----------
sheep_list = [True, True, False, False, True, True, False, False, True, True, False, False, 'g']
sheep_count = 0;
for sheep in sheep_list:
  if sheep== True:
    sheep_count += 1
  else:
    continue

print(sheep_count)
print(sheep_list.count(True))