let fs = require('fs')

let operation = process.argv[2]
let number = process.argv[3]

// reading value from text file
function total() {
  fs.readFile('./bank.txt', 'utf8', function (err, data) {
    if (err) {
      return console.log(err)
    }

    var output = data.split(', ')
    let sum = 0

    for (let i = 0; i < output.length; i++) {
      if (parseFloat(output[i])) {
        sum += parseFloat(output[i])
      }
    }

    console.log('You have a total of ' + sum.toFixed(2))
  })
}

//  deposit value to the text file
function depoist() {
  fs.appendFile('./bank.txt', ', ' + number, function (err) {
    if (err) {
      return console.log(err)
    }
    console.log('Deposited ' + number + '.')
    total()
  })
}

//  withdraw value to the text file
function withdraw() {
  fs.appendFile('bank.txt', ', -' + number, function (err) {
    if (err) {
      return console.log(err)
    }
    console.log('Withdrew ' + number + '.')
    total()
  })
}

function lotto() {
  fs.appendFile('bank.txt', ', -.25', function (error) {
    if (error) {
      return console.log(error)
    }
  })

  var chance = Math.floor(Math.random() * 10 + 1)

  if (chance === 1) {
    fs.appendFile('bank.txt', ', 200', function (error) {
      if (error) {
        return console.log(error)
      }
    })

    console.log('Congrats you won the lottery!')
  } else {
    console.log(
      'Sorry. You just lost 25 cents. Maybe you should get a job instead.'
    )
  }
  total()
}

if (operation === 'deposit') {
  depoist()
} else if (operation === 'total') {
  total()
} else if (operation === 'withdraw') {
  withdraw()
} else if (operation === 'lotto') {
  lotto()
}
