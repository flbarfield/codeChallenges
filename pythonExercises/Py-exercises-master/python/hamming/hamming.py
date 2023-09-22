# def distance(strand_1, strand_2):
# 	tracker = 0
# 	count = 0
# 	# Need to be able to assign indexes 
# 	strand_1 = list(strand_1)
# 	strand_2 = list(strand_2)
# 	# need to then cross check indexes to see if theyre the same
# 	while count < len(strand_1):
# 		if strand_1[count] != strand_2[count]:
# 			tracker += 1
# 		count += 1
	
# 	# return the number of indexes that are different
# 	return(tracker)

## Let's try to use zip() ##
# zip is very good at comparing the values within two OR MORE sequences #
def distance(strand_1, strand_2):
	count = 0
	for k,v in zip(strand_1, strand_2):
		if k != v:
			count += 1
	print(count)

distance('GGACG', 'GGTCG')