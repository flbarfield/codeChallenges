// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    let splitString = str.split('')
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let count = 0
  
    //loop through characters of given string
    splitString.forEach((letter) => {
      // for each letter, checking the vowel list for matches
      vowels.forEach((vowel) => {
        //count is incremented by 1 if vowel matches given letter
        if (vowel === letter) {
          count += 1
        }
      })
    })
    // return the *number* of vowels within the given string
    return(count)
  }
  
  getCount('abracadabra')
  

// ****Alternative solutions

// ~~~ .the ig at the end of the first parameter allows the match method to do a global case insensitve search on the string. Match will return an array with the matches, first argument is the search value while the second argument is the regular expression (or a string that will be converted to a regular expression.). Here, The length of that array that is obtained by match is then counted by '.length' ~~~

// function getCount(str) {
//   return (str.match(/[aeiou]/ig)||[]).length;
// }

// ~~~ this solution is simply filtering to check for both cases-possibilities of the vowels, and if 'c' is included, it will be added to an array-like feature. The length of that will give the count.
// function getCount(str) {
//     return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
//    }
