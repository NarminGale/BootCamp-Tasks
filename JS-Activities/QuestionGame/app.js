let questions = {
  q1: ['What is my name?', 'narmin'],
  q2: ['What is my surname?', 'aliyeva'],
  q3: ['Do I like red?', 'yes'],
  q4: ['What is my speciality?', 'computer science'],
  q5: ['How old I am?', '20'],
}
function askQuestion() {
  let userScore = 0
  let question = Object.values(questions)
  let lengthOfQuestions = Object.keys(questions).length
  for (let i = 0; i < lengthOfQuestions; i++) {
    let value = question[i][0]
    let answer = prompt(value)
    if (answer === question[i][1]) {
      alert('You are right')
      userScore++
    } else {
      alert('You are wrong')
    }
  }
  alert(`Your Score is ${userScore}`)
}
askQuestion()
