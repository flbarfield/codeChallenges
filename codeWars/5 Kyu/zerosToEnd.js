// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

//pseudo: 
// 1) loop through array
// 2) count number of 0s
// 3) filter out all 0s
// 4) push 0s up to the counted number

function moveZeros(arr) {
  console.log(arr)
  let zeroCount = 0
  let loopCount = 0
  // loop through array, count number of 0s
  for (i in arr) {
    if (arr[i] === 0) {
      zeroCount++
    }
  }
  // filter out all 0s. Put this into a function so I can recursively call it. Ends recursion when there's no more 0s
  function zeroCheck() {
    if (arr.includes(0)) {
      arr.filter((value, index) => {
        if (value === 0) {
          arr.splice(index, 1)
        }
      })
    } else {
      return
    }
    zeroCheck()
  }

  zeroCheck()

  // push 0s up to the counted number
  while (loopCount < zeroCount) {
    arr.push(0)
    loopCount++
  }
  console.log(arr)
}
  
  moveZeros([1,2,0,1,0,1,0,3,0,1])


// Whew, brute forced the heck out of that one... Other solutions:
//
// ***
//var moveZeros = function (arr) {
//   return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
// }
//
// var moveZeros = function (arr) {
//   var filtedList = arr.filter(function (num){return num !== 0;});
//   var zeroList = arr.filter(function (num){return num === 0;});
//   return filtedList.concat(zeroList);
// }
//
// var moveZeros = function (arr) {
//   return [
//     ...(arr.filter(n => n !== 0)),
//     ...(arr.filter(n => n === 0))
//   ];
// }