// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

// solutions:

// 1) integers are basically saying, if there's no function wrapped into this one, simply return the number

// function zero(fn) {return fn ? fn(0) : 0}
// function one(fn) {return fn ? fn(1) : 1}
// function two(fn) {return fn ? fn(2) : 2}
// function three(fn) {return fn ? fn(3) : 3}
// function four(fn) {return fn ? fn(4) : 4}
// function five(fn) {return fn ? fn(5) : 5}
// function six(fn) {return fn ? fn(6) : 6}
// function seven(fn) {return fn ? fn(7) : 7}
// function eight(fn) {return fn ? fn(8) : 8}
// function nine(fn) {return fn ? fn(9) : 9}

// function plus(n) {return function(v) {return v + n}}
// function minus(n) {return function(v) {return v - n}}
// function times(n) {return function(v) {return v * n}}
// function dividedBy(n) {return function(v) {return v / n}}

// 2)
// const zero = a => a ? a(0) : 0
// const one = a => a ? a(1) : 1
// const two = a => a ? a(2) : 2
// const three = a => a ? a(3) : 3
// const four = a => a ? a(4) : 4
// const five = a => a ? a(5) : 5
// const six = a => a ? a(6) : 6
// const seven = a => a ? a(7) : 7
// const eight = a => a ? a(8) : 8
// const nine = a => a ? a(9) : 9

// const plus = a => b => a + b
// const minus = a => b => b - a
// const dividedBy = a => b => Math.floor(b / a)
// const times = a => b => a * b

// 3)
// const [zero, one, two, three, four, five, six, seven, eight, nine] = [...Array(10)].map((_, idx) => fn => fn ? fn(idx) : idx);
// const [plus, minus, times, dividedBy] = [`+`, `-`, `*`, `/`].map(val => new Function(`b`, `return a => a ${val} b ^ 0`));