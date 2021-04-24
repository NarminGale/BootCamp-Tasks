// getting random number between two variables
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function getRandomTarget() {
  $('#target-score').val(getRandomNumber(20, 120))
  var targetScore = parseInt($('#target-score').val())
  $('#target-score').text(targetScore)
}
getRandomTarget()

let blue = $('#blue')
let green = $('#green')
let red = $('#red')
let yellow = $('#yellow')
let yourScore = $('#your-score')
let score = 0
let win = 0
let loss = 0

blue.val(getRandomNumber(1, 12))
green.val(getRandomNumber(1, 12))
red.val(getRandomNumber(1, 12))
yellow.val(getRandomNumber(1, 12))

blue.click(function () {
  score = score + parseInt(blue.val())
  yourScore.text(score)
  console.log(blue.val())

  //   checking target score and your score
  checkinScore()
})

green.click(function () {
  score = score + parseInt(green.val())
  yourScore.text(score)
  console.log(green.val())
  checkinScore()
})

red.click(function () {
  score = score + parseInt(red.val())
  yourScore.text(score)
  console.log(red.val())
  checkinScore()
})

yellow.click(function () {
  score = score + parseInt(yellow.val())
  yourScore.text(score)
  console.log(yellow.val())
  checkinScore()
})

function checkinScore() {
  if (score === targetScore) {
    alert('You win')
    win++
    $('#win-count').text(win)
  } else if (score > targetScore) {
    alert('You lost')
    loss++
    $('#loss-count').text(loss)
  }
}
