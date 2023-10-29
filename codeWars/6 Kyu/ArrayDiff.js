// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

function arrayDiff(a, b) {
    //looping through removal list
    b.forEach((bNum)=>{
      // will keep checking for matches in A, deleting until there's no matches
      while (a.indexOf(bNum) != -1) {
        a.splice(a.indexOf(bNum), 1)
      }
    })
    console.log(a)
    }
  
  arrayDiff([1,2,2], [2])
  

// OTHER SOLUTIONS

//filter will keep checking and removing elements, and if it's not included it will be put into an array.

// function array_diff(a, b) {
//     return a.filter(e => !b.includes(e));
//   }

//works similarily as the above, when runs an index of check similar to my own solution
//   function array_diff(a, b) {
//     return a.filter(function(x) { return b.indexOf(x) == -1; });
//   }

//   function array_diff(a, b) {
//     b = new Set(b)
//     return a.filter(v => !b.has(v))
//   }