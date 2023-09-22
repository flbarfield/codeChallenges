def word_count(sentence):
	word_dict = {}
	new_sentence = ""
	new_sentence = sentence.translate(str.maketrans("_,!&@$%^:.","          "))
	
	for word in new_sentence.lower().split():
		word_dict[word] = word_dict.get(word, 0) + 1
	return(word_dict)

	### Unsure how to handle Test_Unicode. Will make another iteration
	###  when I figure that out