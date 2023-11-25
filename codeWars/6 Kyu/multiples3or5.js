// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Additionally, if the number is negative, return 0.

// Note: If the number is a multiple of both 3 and 5, only count it once.

//pseudo:
// find nums below passed in num, that are divisible by 3 and 5
// sum all those numbers together and return the value
// if num is mult of both 3 & 5, count only once.

function solution(number){
    // if num is neg, return 0
    if (number < 0) {
      return 0
    } else {
      let sum = 0;
      for (let i = 0; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
          sum += i
        }
      } 
      console.log(sum)
    }
  }
  
  
  solution (10)