// Given a string, you progressively need to concatenate the first letter from the left and the first letter to the right and "1", then the second letter from the left and the second letter to the right and "2", and so on.

// If the string's length is odd drop the central element.

// For example:

// charConcat("abcdef")    == 'af1be2cd3'
// charConcat("abc!def")   == 'af1be2cd3' // same result


//***pseudocode:
// determine if str is even or odd
// if odd, divide by 2, round it, and take away the middle element
// loop through the string and add 1, 2, etc after every two elements
// return string
// IF EVEN, just do the previous two steps

function charConcat(string){
    let newStr = string
    let maths = 0
    if (!string.length % 2 === 0) {
        let maths = Math.round(string.length/2)
        newStr = string.slice(0, maths)
        console.log(newStr)
    }    
  }

  charConcat('cat')