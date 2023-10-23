// Very simple, given an integer or a floating-point number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34

//  super over thought this one...Apparently I forgot how basic multiplication works

// function opposite(number) {
//   //handles 0s
//   if (number === 0) {
//     return 0
//   //checks if num is negative
//   } else if (Math.sign(number) === -1) {
//     let oppositeNum = '' + number
//     console.log(oppositeNum)
//     oppositeNum.replace('-','')
//     parseInt(oppositeNum)
//     console.log(oppositeNum)
//     return oppositeNum
//     // checks of num is positive
//   } else if (Math.sign(number) === 1){
//     let oppositeNum = '-' + number
//     return parseInt(oppositeNum)
//   }
// }

// SOLUTIONS -

function opposite(number) {
    return(-number);
  }

  const opposite = number => -number;

  function opposite(number) {
    return number * (-1);
}