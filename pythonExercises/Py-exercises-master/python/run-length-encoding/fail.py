def encode(string):
#### ACK! This gives back A2B3C4, not 2A3B4C ####
	code_dict = {}
	fin_set = set()
	fin_string = ""
	# Assigns number of appearences to each letter
	for letter in string:
		code_dict[letter] = code_dict.get(letter, 0) + 1
	# Now to call the keys and put them into a string -
	# Why deal with sets at all? Doesn't list duplicate items
	for item in string:
		fin_set.add(item + str(code_dict[item]))
	# Now to join the items into a string
	fin_string = ''.join(str(e) for e in sorted(list(fin_set)))
	print(fin_string)

def decode(string):
	pass

encode('AABBBCCCC')
decode('2A3B4C')

######################################################### 
#           This works but...
#TURNS OUT THEY FUCKING WANT SOMETHING DIFFERENT ENTIRELY
# Each time a new value is come across within a string, 
# the counter for the letter will restart entirely.
# so WWWBBWB would be 3W2B1W1B
#########################################################
def encode(string):
	string = string.upper().strip()
	hold_count = ""
	code_dict = {}
	fin_list = []
	# num of letter appearances as keys, letter as values
	# The set ensures there's no duplicate letters in loop
	for letter in set(string):
		hold_count = str(string.count(letter))
		code_dict[hold_count] = letter
	# -- Now to place the dict items into a string --
	# iterates through keys in order and attaches values
	for item in sorted(list(code_dict)):
		fin_list.append(item + code_dict[item])
	return ''.join(str(i) for i in fin_list)	

def decode(string):
	string = string.upper().strip()
	hold_num = 0
	fin_list = []
	for item in string:
		if item.isdigit():
			hold_num = int(item)
		elif item.isalpha():
			fin_list.append(hold_num * item)
	return ''.join(str(i) for i in fin_list)
