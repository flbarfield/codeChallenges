// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
// spinWords( "This is a test") => returns "This is a test" 
// spinWords( "This is another test" )=> returns "This is rehtona test"

//pseudo:
//para: recieving a string of one or more words. Will only include letters and spaces. Spaces are only included when there's more than one word present.

//returning: same string, but all words 5 or more letters get reversed.

//steps:
// 1) split string into array
// 2) iterate through array
// 3) determine of element in array.length is > 5
// 4) if element >= 5, reverse word. Else, keep word as is
// 5) return string.

function spinWords(string){
    let strArr = string.split(' ')
    let newArr = []
    for (i in strArr) {
      if (strArr[i].length >= 5) {
        newArr.push(strArr[i].split('').reverse().join(''))
      } else {
        newArr.push(strArr[i])
      }
    }
    console.log(newArr.join(' '))
  }
  
  spinWords( "Hey fellow warriors" )

//   Other solutions
// 
// *** Great way of using ternaries to determine the > 4 condition for reversing. Mapping is is cool too after a split, since no matter what you have to do in this problem, a split is going to be needed. ***

// function spinWords(words){
//   return words.split(' ').map(function (word) {
//     return (word.length > 4) ? word.split('').reverse().join('') : word;
//   }).join(' ');
// }

// function spinWords(string){
//   return string.replace(/\w{5,}/g, function(w) { return w.split('').reverse().join('') })
// }