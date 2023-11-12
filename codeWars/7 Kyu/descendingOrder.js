// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321


//return: digits highest to lowest
//para: any NON negative integer

function descendingOrder(n, answer){
    let n2 = '' + n
    //split num to make array
    //sort in decending order
    //join back together into a string
    n2 = n2.split('').sort((a, b) => b - a).join('')
    //make string a num again.
    console.log(Number(n2), answer)
  }
  
  descendingOrder(1021, 2110)


// other solutions:

// I attempted this at first, but didn't do sort and reverse back to back. Easy way of making an array reverse without the optional argument in sort.
 
// function descendingOrder(n){
//     return parseInt(String(n).split('').sort().reverse().join(''))
//   }