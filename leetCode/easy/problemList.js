// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

 

// Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.
// Example 2:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 3:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 

// Constraints:

// 1 <= s.length <= 15
// s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
// It is guaranteed that s is a valid roman numeral in the range [1, 3999].

// parameter: string representing the symbol
// return: an int that is the total value of the symbols
// steps: 
// 1) declare a counter to keep track of total
// 2) split string
// 3) for each value within string, add to count.
// 4) write cases for subtraction within the ifs statements
// 4) return count

var romanToInt = function(s) {
    let count = 0
    let sArr = s.split('')
    sArr.forEach((element, index) => {
      if (element === 'I') {
        if (sArr[index + 1] === 'V' || sArr[index + 1] === 'X')
          count--
        else {
          count++
        }
      } else if (element === 'V') {
        count += 5
      } else if (element === 'X') {
        if (sArr[index + 1] === 'L' || sArr[index + 1] === 'C')
          count -= 10
        else {
          count += 10}
      } else if (element === 'L') {
        count += 50 
      } else if (element === 'C') {
        if (sArr[index + 1] === 'D' || sArr[index + 1] === 'M')
          count -= 100
        else {
          count += 100}
      } else if (element === 'D') {
        count += 500
      } else if (element === 'M') {
        count += 1000
      }
    })
    return count
};