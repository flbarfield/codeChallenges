    # Given an array of integers, find the one that appears an odd number of times.

    # There will always be only one integer that appears an odd number of times.

# steps:
# create count
# loop through seq
# 2nd loop, checking the seq against each individual nums of 1st loop 
# if count % 2 != 0, break return number

def find_it(seq):
  for e in seq:
    count = 0
    for e2 in seq:
      if e2 == e:
        count += 1
    if count % 2 != 0:
      print(e)

find_it([7, 2, 5, 3, 3, 2, 7])

# other solutions:
# 
#  def find_it(seq):
#     for i in seq:
#         if seq.count(i)%2!=0:
#             return i
        
# def find_it(seq):
#     return [x for x in seq if seq.count(x) % 2][0]

# def find_it(seq):
#     for elem in set(seq):
#         if seq.count(elem) % 2 == 1:
#             return elem