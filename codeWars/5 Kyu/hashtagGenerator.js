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