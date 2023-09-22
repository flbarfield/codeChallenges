def hey(in_sentence):
	
	if in_sentence.strip().endswith('?') and not in_sentence.isupper():
		return 'Sure.'
	if in_sentence.isupper():
	 	return 'Whoa, chill out!'
	if in_sentence.strip() == '' or in_sentence.isspace():
	 	return 'Fine. Be that way!'
	else:
		return 'Whatever.'
