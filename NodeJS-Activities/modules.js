let arr = process.argv
let num = parseInt(arr[2])
let divider = parseInt(arr[3])

sum = 0
let i = 0

if (!divider) {
  divider = 6
}
for (i; i < num; i += divider) {
  sum += i
  console.log(i)
}
console.log(sum)
