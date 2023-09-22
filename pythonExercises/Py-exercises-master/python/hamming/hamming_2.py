def distance(strand_1, strand_2):
	count = 0
	for k,v in zip(strand_1, strand_2):
		if k != v:
			count += 1
	return count