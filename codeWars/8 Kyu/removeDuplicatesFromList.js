// Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

// The order of the sequence has to stay the same.

// Examples:

// Input -> Output
// [1, 1, 2] -> [1, 2]
// [1, 2, 1, 1, 3, 2] -> [1, 2, 3]

// psudeocode:
// loop through array
// check if num is already in list.
// if num is not already in list, append number to list

function distinct(a) {
    aList = []
      a.forEach(num => {
          if (!aList.includes(num)) {
              aList.push(num)
          }
      });
      return aList
  }

//
// other ways of accomplishing the same thing:
//#1
// function distinct(a) {
//   return [...new Set(a)];
// }
//
// #2
//function distinct(a) {
//     return Array.from(new Set(a));
// }
// 
// #3
// const distinct = a => a.filter((item, index) => a.indexOf(item) === index);