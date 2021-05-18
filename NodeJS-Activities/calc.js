let arr = process.argv

if (arr.length === 5) {
  if (isNaN(arr[3]) || isNaN(arr[4])) {
    console.log('This is not a number')
  } else {
    let val1 = parseInt(arr[3])
    let val2 = parseInt(arr[4])
    if (arr[2] === 'add') {
      let result = val1 + val2
      console.log(result)
    } else if (arr[2] === 'subtract') {
      let result = val1 - val2
      console.log(result)
    } else if (arr[2] === 'multiply') {
      let result = val1 * val2
      console.log(result)
    } else if (arr[2] === 'devision') {
      let result = val1 / val2
      console.log(result)
    }
  }
} else {
  console.log('You need to write 5 input')
}
