// DESCRIPTION:
// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

//pseudo: 
// return:
// starts with # ... All words must have first letter captitalized...If final result is longer than 140 char, return false...If input is an empty string, return false.

// steps:
// 1a) determine if str is empty, return false
// 1) split str into array
// 2) capitalize first word of each item
// 3) unshift in #
// 4) determine if total string is > 140 char, if it does return false

function generateHashtag(str) {
    // 1a) determine if str is empty, return false
    if (!str.trim() || str === '#') {
      console.log(false)
    } else {
      // 1b) split str into array
      // 2) capitalize first word of each item, concact it with remaining letters of word.
      let arr = str.split(' ')
      arr = arr.map((word) => word.charAt(0).toUpperCase() + word.slice(1, word.length))
      //3) unshift in the #
      arr.unshift('#')
      arr = arr.join('')
      // 4) determine if total string is > 140 char, if it does return false
      if (arr.length > 140){
        console.log (false)
      } else {
        console.log (arr)
      }
    }
  }
  
  generateHashtag(" ".repeat(200))

// Other Solutions:

// ***Good to remember that reduce's whole purpose is to bring things to a single result. 'str.substring' is actually new to me though, it returns all values after the index that it is given! If given two parameters, first will be where it should start while the second will be where it stops.

// function generateHashtag (str) {

//     var hashtag = str.split(' ').reduce(function(tag, word) {
//       return tag + word.charAt(0).toUpperCase() + word.substring(1);
//     }, '#');
    
//     return hashtag.length == 1 || hashtag.length > 140 ? false : hashtag;
//   }

// function generateHashtag(str) {
//   if (!str.trim()) return false;

//   const result =
//     '#' +
//     str
//       .split(' ')
//       .map((l) => l.charAt(0).toUpperCase() + l.slice(1))
//       .join('');

//   return result.length > 140 ? false : result;
// }

// const generateHashtag = str => (s = '#'+str.trim().split(" ").filter(e=>e).map(e=>e[0].toUpperCase() + e.substring(1,e.length).toLowerCase()).join("")).length > 1 && s.length <= 140 ? s : false