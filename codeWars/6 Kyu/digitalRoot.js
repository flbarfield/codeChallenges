// parameter - recieving a number
// pseudocode:   
// 1) split number into individual digits
// 2) add each digit reducing them into a single digit.
// 3) if digit has two or more digits, continue to reduce until you get a single digit

function digitalRoot(n) {
    // convert num to string for split method, to seperate units
    let arr = n.toString().split('')
    // convert string units back to int
    arr = (arr.map(Number))
    // adding arr units into a single sum
    let dRoot = arr.reduce((acc, currentValue) => {
      return(acc + currentValue)
    }, 0)
    //check if sum has more than 1 digit by converting to string for the check...If num has more than one digit, convert back to num for reducing. A while loop is used to continue the operation if condition isn't met
    if (dRoot.toString().length > 1) {
      while (dRoot.toString().length > 1) {
        dRoot = dRoot.toString().split('')
        dRoot = dRoot.map(Number)
        dRoot = dRoot.reduce((acc, currentValue) => {
            return(acc + currentValue)
          }, 0)
      }
      console.log(dRoot)
    } else {
      console.log(dRoot)
    }
  }
  
  
  digitalRoot(648199)

  // OTHER SOLUTIONS:

// ***comments say this clearly requires mathematic background knowledge, and as such this solution makes no sense to me.***
//   function digital_root(n) {
//     return (n - 1) % 9 + 1;
//   }

//***Neat and easy, checks if n is less than 10 right away. Else it process the number with str/split/reduce***
//   function digital_root(n) {
//     if (n < 10) return n;
    
//     return digital_root(
//       n.toString().split('').reduce(function(acc, d) { return acc + +d; }, 0));
//   }

//***Similar to above, just uses a for loop instead of reduce.***/
//   function digital_root(n) {
//     if (n < 10)
//       return n;
  
//     for (var sum = 0, i = 0, n = String(n); i < n.length; i++)
//       sum += Number(n[i]);
     
//     return digital_root(sum);
//   }