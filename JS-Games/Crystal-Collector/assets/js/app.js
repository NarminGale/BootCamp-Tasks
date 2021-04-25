// getting random number between two variables
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

// getting random target
function getRandomTarget() {
  $('#target-score').val(getRandomNumber(20, 120))
  var targetScore = parseInt($('#target-score').val())
  $('#target-score').text(targetScore)
  return targetScore
}

// checking score
function checkinScore() {
  if (score === randomTarget) {
    win++
    $('#win-count').text(win)
    alert('You win')
    score = 0
    yourScore.text(score)
    randomTarget = getRandomTarget()
  } else if (score > randomTarget) {
    loss++
    $('#loss-count').text(loss)
    alert('You lost')
    score = 0
    yourScore.text(score)
    randomTarget = getRandomTarget()
  }
}

let randomTarget = getRandomTarget()

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
  //   checking target score and your score
  checkinScore()
})

green.click(function () {
  score = score + parseInt(green.val())
  yourScore.text(score)
  checkinScore()
})

red.click(function () {
  score = score + parseInt(red.val())
  yourScore.text(score)
  checkinScore()
})

yellow.click(function () {
  score = score + parseInt(yellow.val())
  yourScore.text(score)
  checkinScore()
})
