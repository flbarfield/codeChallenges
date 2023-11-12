// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Examples
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12
// Notes
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.


// psudocode:
//make num neg. If num already neg, don't change

function makeNegative(num) {
    if (num < 0) {
      console.log(num)
    } else {
      console.log(num * -1)
    }
  }
  
  makeNegative(-1)

// other solutions:

// abs always returns a positive number, so it's easy to make everything negative by default
function makeNegative(num) {
    return -Math.abs(num);
  }

//   ternary is really useful here as negatives are falsys
  function makeNegative(num) {
    return num < 0 ? num : -num;
  }