// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

function twoSort(s) {
 //pseudocode: * make container for string *sort existing list, store first value *split each letter of the word with three stars....CANT REMOVE OR ADD ELEMENTS TO ORIGINAL ARRAY
    let newStr = "" 
    let newerStr = ""
    s = s.sort()
    newStr = s[0]
    for(let i = 0; i < newStr.length; i++) {
      if(i === newStr.length-1) {
        newerStr += newStr[i]
      } else {
        newerStr += newStr[i] + '***'
      }
    }
    console.log(s)
    return newerStr
  }

//Alternatives:
// function twoSort(s) {
//     return s.sort()[0].split('').join('***');
//   }

// twoSort = s => s.sort()[0].split('').join('***')