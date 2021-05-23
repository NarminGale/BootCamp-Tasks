let fs = require('fs')

fs.readFile('./best_things_ever.txt', 'utf8', function (err, data) {
  if (err) {
    return console.log(err)
  }

  var output = data.split(',')
  console.log(output)
})
