// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

//pseudo: 
// 1) loop through array
// 2) count number of 0s
// 3) filter out all 0s
// 4) push 0s up to the counted number

// I'm currently doing exactly what the problem is asking with all sorts of numbers and letters, undefined, and empty values. But I'm not sure at all on what sort of wierd edge case it's failing on via codewars' invisible testing suite. May have to unlock solutions because I'm stumped.

function moveZeros(arr) {
    let zeroCount = 0
    let loopCount = 0
    // loop through array, count number of 0s
    for (i in arr) {
      if (arr[i] === 0) {
        zeroCount ++
      }
    }
    // filter out all 0s
    arr.filter((value, index) => {
      if (value === 0) {
        arr.splice(index, 1)
      }
    })
    // push 0s up to the counted number
    while (loopCount < zeroCount) {
      arr.push(0)
      loopCount ++
    }
    console.log(arr)
  }
  
  moveZeros([1,2,0,1,0,1,0,3,0,1])

