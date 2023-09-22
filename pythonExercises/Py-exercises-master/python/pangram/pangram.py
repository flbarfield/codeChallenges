def is_pangram(sentence):
	alphabet = list('abcdefghijklmnopqrstuvwxyz')
	result = True
	for letter in alphabet:
		if letter not in sentence.lower():
			result = False
			break
	return result