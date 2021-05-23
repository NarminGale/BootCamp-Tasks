var bandList = require('./bands.js')

let genre
if (process.argv[2]) {
  genre = process.argv[2]
}

for (var key in bandList) {
  if (key === genre) {
    console.log('A ' + key + ' band is ' + bandList[i] + '.')
  }
}
