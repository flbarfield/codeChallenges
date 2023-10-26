// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.

function likes(names) {
    switch(names.length) {
        // if list is empty, return 'no one likes this'
      case 0 : return('no one likes this')
      break
        // if list has 1, '<name> like this'
      case 1: return(`${names[0]} likes this`)
        break
        // if list has 2, '<n1> and <n2> like this'
      case 2: return(`${names[0]} and ${names[1]} like this`)
        break
        // if list has 3, '<n1>, <n2> and <n3> like this'
      case 3: return(`${names[0]}, ${names[1]} and ${names[2]} like this`)
        break
        // if list has 4 or more, using this as a default, '<n1>, <n2> and <num of people> like this'
      default: 
        let count = 0
        while (count < names.length) {
          count ++
        }
        return(`${names[0]}, ${names[1]} and ${count-2} others like this`)
        break
    }
  }

// Basically all the optimal solutions used switch cases like I did...