// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

function countSheeps(sheep){
    //pseudo-code: 1) create a counter 2) loop through array 3) determine values are true or false 4) if true, add to counter 5) return value
    function countSheeps(sheep) {
        let count = 0
          sheep.forEach(element => {
              if (element) {
                  count += 1
              }
        });
        return(count)
    }
}

// Alternatives:
// 
// function countSheeps(arrayOfSheeps) {
//     return arrayOfSheeps.filter(Boolean).length;
//   }

// let countSheeps = x => x.filter( s => s ).length;

// function countSheeps(arrayOfSheep) {
//     var array = arrayOfSheep.reduce((a,b)=>a + (b===true?1:0),0)
//     return array;
//   }