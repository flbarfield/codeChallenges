def detect_anagrams(word, *args):
	edited_word = list(word.lower())
	for word_list in args:
		for word_list_word in word_list:
			print(word_list_word.lower())
			# for letter in word_list_word:
			# 	print(letter)
					# if letter not in edited_word:
					# 	print(False)
					# 	return
					# else:
					# 	print(True)

detect_anagrams('Orchestra',
                            'cashregister Carthorse radishes'.split())