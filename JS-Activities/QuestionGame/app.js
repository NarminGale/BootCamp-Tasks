let questions = {
  q1: ['What is my name?', 'narmin'],
  q2: ['What is my surname?', 'aliyeva'],
  q3: ['Do I like red?', 'yes'],
  //   q4: ['What is my speciality?', 'cs'],
  //   q5: ['How old I am?', '20'],
  //   q6: ['What is birthday?', '30'],
  //   q7: ['Who is best friend?', 'fidan'],
  //   q8: ['What is favorite music?', 'retro'],
  //   q9: ['Where do I want to study master ?', 'america'],
  //   q10: ['Who is my teacher?', 'elshad'],
}

function askQuestion() {
  let userScore = 0
  let lengthOfQuestions = Object.keys(questions).length
  for (let i = 0; i < lengthOfQuestions; i++) {
    let value = Object.values(questions)[i][0]
    let answer = prompt(value)
    if (answer === Object.values(questions)[i][1]) {
      alert('You are right')
      userScore++
    } else {
      alert('You are wrong')
    }
  }
  console.log(`Your Score is ${userScore}`)
}
askQuestion()
