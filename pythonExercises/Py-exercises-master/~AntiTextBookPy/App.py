"""###### First Section, Operators ######"""

# Exercise:

# first = int(input("Please input three numbers to be multiplied. \nFirst number: "));
# second = int(input("Second Number: "));
# third = int(input("Third Number: "));
#
# while True:
#     first;
#     second;
#     third;
#     finalNum = first * second * third;
#     print("Your numbers multiplied is: ", finalNum);
#     break



##### Second Section, High Level Data Structures #####

##NOTES##
# dir returns all methods valid for the data type! Excellent for when you get stuck with a particular object type
# SLICING: var[a:b:c]... a = starting place. b = many element it'll count, c = how elements are incremented

# Excercises

#1
# Find the number of occurances of 1 in the list [1,2,1,2,1,2,3,4,1,2,3].

# givenList = [1,2,1,2,1,2,3,4,1,2,3]
# count = 0
#
# for i in givenList:
#     if i == 1:
#         count += 1
# print("There are ", count, " ones in this list.");

#2
# Find all the unique elements of a list. Input; a = [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4]. Output; [1, 2, 3, 4].
#
# """givenList2 = [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4]
# newlist = []
#
# for i in givenList2:
#     if i not in newlist:
#         newlist.append(i)
# print(newlist)
# """

#3
# Solve the above problem using a dictionary.

# givenList2 = [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4]
# storedDict = {}
# count = 0
# storedList = []
#
# for i in givenList2:
#     if i not in storedList:
#         storedList.append(i)
# storedDict['Number List is '] = storedList
# print(storedDict)

#4
# Find the count of each element of a list except "\n". a = [1, 2, 2, 3] should return this output. 1 : 1,, 2 : 2, 3 : 1.

# givenList2 = [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4]
# storedDict = {}
#
# for i in givenList2:
#     if i not in storedDict.keys():
#         storedDict[i] = 1
#     else:
#         storedDict[i] += 1
# print(storedDict)

#5
# Create a random dictionary and print key : value pair in ascending order of keys. Input: a = {"IN":"India", "ES":"Español"}, output: "ES"":"Español", "IN":"India". You have to use dir to find out the necessary functions.

# randoDict = {'AZ' : 'Arizona', 'TX' : 'Texas', 'UT' : 'Utah', 'MS' : 'Mississippi'}
# print(sorted(randoDict))

#6
# The same example as above, print in descending order.

# randoDict = {'AZ' : 'Arizona', 'TX' : 'Texas', 'UT' : 'Utah', 'MS' : 'Mississippi'}
# print(sorted(randoDict, reverse=True))

#7 Given twos list, find their
# a) common elements.
# b) elements present in list a but not in b.
# c) elements present in list b but not in a. hint: use sets.

# -----A-----

"""SAME LISTS FOR A, B, C"""

# aList = ['apple', 'annie', 'bill', 'bob', 'joe']
# bList = ['Savannah', 'apple', 'billy', 'bob', 'jackson']
# newList = []

# for i in aList:
#     if i in bList:
#         newList.append(i)
# print(newList)

# -----B-----

# for i in aList:
#     if i not in bList:
#         newList.append(i)
# print(newList)

# -----C-----
# for i in bList:
#     if i not in aList:
#         newList.append(i)
# print(newList)

#8 Print a reverse of a list without using the reverse method.

# aList = ['apple', 'annie', 'bill', 'bob', 'joe']
#
# print(aList[::-1])

"""##### Third Section, Constructs #####"""


# 1 - Given that a = [1,2,3,4,[5,6,7]]
# Delete the first value.

# a = [1,2,3,4,[5,6,7]]

# del a[0]
# print(a)

# Delete the second value of the list present at index 4.

# del a[4]
# print(a)

# Delete the variable a.

# del a

# Take an input value from the user and delete it (if it is present), print "value not present" if the value is not present in the list.

# phraseList = []
# storedVar = input('Hey, Type anything. But type Q to quit: ')
#
# while True:
#     if 'Q' in storedVar:
#         break
#     elif storedVar in phraseList:
#         print("Hey! You've already typed that! But here's your current list.\n", phraseList)
#         storedVar = input('Try another again! Or enter "Q" to quit!: ')
#     else:
#         phraseList.append(storedVar)
#         print("Here's your current list: ", phraseList)
#         storedVar = input("Try more characters!: ")

#2
# Given that

# a = {"IN":"India", "ES":"Espanol"}

# Delete the key "IN".

# del a['IN']
# print(a)

# Delete the key "ES"
# del a['ES']

# Delete the variable a.
# del a

"""######## -- More Exercises -- #########"""

# 1
# Take the name, age and score of the user as input. Print their percentage. If the percentage is less than 60, print F, if percentage is between 60 and 70 print B and if percentage is greater than 70 print A. Marks are out of 100.

# score = int(input('What was your test score? : '))
#
# if score < 60:
#     print('YOU FAIL. LOL')
# elif score >= 60 and score < 70:
#     print('Ya get a B. Grats.')
# else:
#     print('YOU GOT AN A! YAHOO!')

#2 Take a number from the user and print if it is even or odd.

# storedNum = int(input('Input a number : '))
#
# if storedNum % 2 != 0:
#   print('Your number is odd')
# else:
#   print('Your number is even')

#3 Take two numbers from the user and print which number is largest.

# a = int(input('Please type a number : '))
# b = int(input('Please type another number : '))
#
# if a > b:
#     print(a, ' is the larger number.')
# elif a < b:
#     print(b, ' is the larger number.')
# elif a == b:
#     print('Both of your numbers are equal.')

#4 Take two numbers from the user and print which number is smallest.

# a = int(input('Please type a number : '))
# b = int(input('Please type another number : '))
#
# if a < b:
#     print(a, ' is the smaller number.')
# elif a > b:
#     print(b, ' is the smaller number.')
# elif a == b:
#     print('Both of your numbers are equal.')

#5 Take three numbers from the user and print largest and smallest number.

# numList = list(input('Please type a number sequence, no spaces'))
#
# print(numList)
#
# numList.sort()
#
# print(numList[::-1])

#6 Take four numbers from the user and create a list.

# numList = list(input('Please type a number sequence, no spaces'))
#
# print('Your number list is', numList)


#7 Take four numbers from the user and create a set.

# fillSet = set()
#
# numList = list(input('Please type a number sequence, no spaces'))
#
# print('Your number list is', numList)
#
#
# for i in numList:
#     fillSet.update(i)
# print('Your list is now a set: ', fillSet, "\nType: ", type(fillSet))



""" ####### Loop Exercises: ##########"""

#1
# Print all numbers till 100.

# val = [101]
# count = 0
#
# while count < 101:
#     if count != val:
#         print(count)
#         count += 1
#     else:
#         break

#2 Print all numbers from 20 to 100.

# val = [100]
# count = 0
#
# while count < 100:
#     if count != val:
#         count += 1
#         if count > 19:
#             print(count)
#     else:
#         break

#3 Print all even numbers less than 100.

# val = [100]
# count = 0
#
# while count < 100:
#     if count != val:
#         count += 1
#         if count % 2 == 0:
#             print(count)
#     else:
#         break

#4 Print all odd numbers less than 100.

# val = [100]
# count = 0
#
# while count < 100:
#     if count != val:
#         count += 1
#         if count % 2 != 0:
#             print(count)
#     else:
#         break

"""########## Exercises: Continue #########"""

#1 Print all numbers from 0 till 10 except 4 and 5.

# for i in range(11):
#     if i == 4 or i == 5:
#         continue
#     else:
#         print(i)

#2 Print all numbers from 0 till 20 except those divisible by 3.

# for i in range(21):
#     if i % 3 == 0:
#         print(i)
#     else:
#         continue

#3 a = [1,2,3,4,5], take an integer as input from the user. Print all numbers which are less than the input number using break.

# a = [1,2,3,4,5]
#
# storedInt = int(input('Please type a number 1-5 : '))
# newList = []
#
# for i in a:
#     if i < storedInt:
#         newList.append(i)
# print('Everything less than the number you typed is:\n', newList)

# Alternative...

# for i in a:
#     if i < storedInt:
#         print(i)

##### Exercises: While ######

#1
# Print all numbers till 100 using while.
#
# i = 0
#
# while i < 101:
#     print (i)
#     i += 1

#2 Print all numbers from 100 to 1 using while.

# i = 100
#
# while i > 0:
#     print (i)
#     i -=1

#3 Print all even numbers less than 100 using while.

# i = 100
#
# while i > 0:
#     if i % 2 == 0:
#         print(i)
#         i -= 1
#     else:
#         i -= 1
#         continue

#4 Print all odd numbers less than 100 using while.

# i = 0
#
# while i < 100:
#     if i % 2 != 0:
#         print(i)
#         i += 1
#     else:
#         i += 1
#         continue


# 5 For a list [1,2,3,4,5], write a program which checks if 6 is present in the list, using while.
#
# aList = [1,2,3,4,5,6]
#
# while True:
#     if 6 in aList:
#         print("THERE'S A 6 IN THIS LIST! ABORT!")
#         break
#     else:
#         print("This list checks out. No sixes.")
#         break


# 6 Print all numbers from 0 to 10 except 4 and 5.


# for i in range(11):
#     if i != 4 and i != 5:
#         print(i)

"""
****List Comprehension Notes:****

Shortcut for working with lists, to perform filter or some other operation on the entire list

Example:
lines = [line.strip() for line in lines]
1st arg is an element of the list, 2nd arg is a for loop, 3rd arg is optional but you may have an 'if' block there.

another example:
a = [1, 3, 4, 5, 5]
b = [i for i in a if i > 3]
print(b)

This would print all values greater than 3

Syntax:
[condition for i in <list> if <another condition>]

****FILES NOTES****

Examples of working with files:
even_file = open('even.txt', w)

the w writes (also creates a file if it doesn't exist). There's also r for read. a for append.

close() your files when your done with them to conserve resources

reading files requires the .readlines() method.

There's also a writelines()

Binary mode:
f = open('file.txt', 'rb')
'b' stands for binary, and you can use r/w/a with it

Read:
f.read(1) reads the first pointer and continues with each calling, starting from 0.

f.tell() tells you where the pointer is located.

f.seek() sets the pointer to any position of your choice. Beginning by default
"""

#Exercises

# 1 Take the user's name, age and height as input and write them to a file using this format. name,age,height.

# f = open('file.txt', 'w')
#
# userInfo = input('Pleast type your name, age, and height : ')
# f.writelines(userInfo)
# f.close()

#2 Read a file "input.txt" and print all the lines which are present multiple times. Please create the input.txt file in such a way that it has many lines and few of them are present multiple times.


# f = open('file.txt', 'r')
# lines = f.readlines()
# lines = [line.strip() for line in lines]
# f.close()
#
# for i in lines:
#     if lines.count(i) > 1:
#         print(i)


# 3 Read a file "input.txt" and print how many times each line is present.

# f = open('file.txt', 'r')
# lines = f.readlines()
# lines = [line.strip() for line in lines]
# f.close()
#
# for i in lines:
#     print(i, lines.count(i))

# 4 There are two files, "file1.txt" and "file2.txt"
#
# 4(a) swap the content of both files.

# rFOne = open('file.txt', 'r')
# linesOne = rFOne.readlines()
# rFOne.close()
#
# rFTwo = open('file2.txt', 'r')
# linesTwo = rFTwo.readlines()
# rFTwo.close()
#
# wFOne = open('file.txt', 'w')
# for i in linesTwo:
#     wFOne.write(i)
# wFOne.close()
#
# wFTwo = open('file2.txt', 'w')
# for i in linesOne:
#     wFTwo.write(i)
# wFTwo.close()


#4 (b) append the content of file1.txt to file2.txt.

# rFOne = open('file.txt', 'r')
# linesOne = rFOne.readlines()
# rFOne.close()
#
# aFTwo = open('file2.txt', 'a')
# for i in linesOne:
#     aFTwo.write(i)
# aFTwo.close()

# 4 (c) append content of file2.txt to file1.txt.

# rFTwo = open('file2.txt', 'r')
# linesTwo = rFTwo.readlines()
# rFTwo.close()
#
# aFOne = open('file.txt', 'a')
# for i in linesTwo:
#     aFOne.write(i)
# aFOne.close()

# 4 (d) take unique content of both files and write them to file3.txt

# rfOne = open('file.txt', 'r')
# linesOne = rfOne.readlines()
# rfOne.close()
#
# rfTwo = open('file2.txt', 'r')
# linesTwo = rfTwo.readlines()
# rfTwo.close()
#
# newFile3 = open('file3.txt', 'a')
# for i in linesOne:
#     newFile3.write(i)
# for i in linesTwo:
#     newFile3.write(i)
#
# newFile3.close()

# 4 (e) Use any file created above. Take a positive number as input from the user and read those many characters from the text file.

# userNum = int(input('How many characters would you like me to read from file3?\n:'))
#
# newFile3 = open('file3.txt', 'r')
#
# print(newFile3.read(userNum))

"""Section: Exception Handling"""
# Notes:
# example -
#
# try:
#     j = 100/i
# except ZeroDivisionError as e:
#     print(e)
# except Exception as e:
#     print(e)
# finally:
#     print('This block always gets executed')
#
# you can have as many excepts as you like, specifics towards the top and more general towards the bottom
#
# exceptions allow your program to still run while handling errors. Printing it to the screen, emailing to departments, and etc.

"""Section: Functions"""
# Notes:
#
# used to save code duplication, making code easier to edit.
#
# def function_name(arg1, arg2):
#     <statements>

# You can pre-set default arguments:
# def power(number, exp=2):
#     print(number ** exp)
#
# any number that's called will be exponentially raised by two by default of unset. EX: power(2). Default arguments must be on the far right after declaration of mandatory arguments (number in example case)
#
# return: returns a function's output to the caller, helpful for processing data that you don't want to print ex:

# def add(name, mode):
#     return name+mode, name-mode
#
# one, two = add('this', 'that')
# print(one, two)
