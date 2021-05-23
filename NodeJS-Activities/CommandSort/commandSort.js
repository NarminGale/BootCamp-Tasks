// Quick warm-up activity
// Create an application that takes in a series of numbers then sorts them.
// Feel encouraged to use Stack or Google to find the "sort" code.
// ===========================================================================================

let fs = require('fs')

let operation = process.argv

console.log(operation)

let arr = []

for (let i = 2; i < operation.length; i++) {
  arr.push(operation[i])
}
sortedArr = arr.sort(function (a, b) {
  return a - b
})

console.log(sortedArr)
