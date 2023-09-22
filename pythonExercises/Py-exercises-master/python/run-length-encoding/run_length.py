def encode(string):
	count = 0
	cap_letter = string[0]
	result = []
	for letter in string:
		if letter == cap_letter:
	 		count += 1
		if letter != cap_letter:
			if count == 1:
				result.append(cap_letter)
				cap_letter = letter
				count = 1
			else:
				result.append(str(count) + cap_letter)
				cap_letter = letter
				count = 1
	print(''.join(result))


def decode(string):
	hold_num = []
	fin_list = []
	total = 0
	for item in string:
		if item.isdigit():
			hold_num.append(str(item))
		if item.isalpha():
			try:
				total = int(''.join(hold_num))
				fin_list.append(total * item)
				hold_num = []
			except ValueError:
				fin_list.append(item)
	return ''.join(fin_list)

encode('WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB')