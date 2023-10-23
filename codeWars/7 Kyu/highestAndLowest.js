// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

function highAndLow(nums) {
    let numList = []
    //split each number by the space
    let newNumSet = nums.split(' ')
     //loop in order to convert string of nums to ints, push into array.
    newNumSet.forEach( (num) => {
      numList.push(parseInt(num))
    })  
    //applys math.max and math.min to arrays, while returning result in string form
    let minMax = `${Math.max.apply(null, numList)} ${Math.min.apply(null, numList)}`
    return minMax
  }

highAndLow()

// *** Other ways of solving...

// ~~ Appears that conversion to int was uncessary. '...numbers' provides a spread othe array so that apply logic is not needed as well ~~
// function highAndLow(numbers){
//     numbers = numbers.split(' ');
//     return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
//   }

// ~~ Splits the string and maps it to a new array in one swoop, AND continues with spreading out the array while applying math.max & min ~~
//   function highAndLow(numbers){
//     let arr = numbers.split(' ').map(Number);  
//     return Math.max(...arr) + ' ' + Math.min(...arr);
//   }