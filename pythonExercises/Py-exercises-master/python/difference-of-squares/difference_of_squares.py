def difference(num):
	return square_of_sum(num) - sum_of_squares(num)


def square_of_sum(num):
	sums = 0
	for digit in range(1, num+1):
		sums = sums + digit
	return sums**2


def sum_of_squares(num): 
	sq_list = 0
	for digit in range(1, num+1):
		sq_list += digit**2
	return sq_list

#square_of_sum(5)
#sum_of_squares(100)