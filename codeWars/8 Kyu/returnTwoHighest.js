// In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.

// The result should also be ordered from highest to lowest.

// Examples:

// [4, 10, 10, 9]  =>  [10, 9]
// [1, 1, 1]  =>  [1]
// []  =>  []

function twoHighest(arr) {
    //pseudocode: 1) make a containing array 2) sort original array 3)determine if highest number is already within containing array, if it's not, then push it. 4)return containing array, but only the first two highest nums
    let newArr = []
    arr = arr.sort((a,b) => b-a)
    arr.forEach(num => {
        if(!newArr.includes(num)) {
            newArr.push(num)
        }
    });
    return newArr.slice(0, 2)
}

// Alternatives

// function twoHighest(arr) {
//     return [...new Set(arr)].sort((a, b) => b - a).slice(0, 2)
//   }

// const twoHighest = a => a
//   .filter((e, i) => i === a.lastIndexOf(e))
//   .sort((x, y) => y - x)
//   .slice(0, 2);