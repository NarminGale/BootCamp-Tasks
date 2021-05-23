var inquirer = require('inquirer')
let userHealth = 70
let zombieHealth = 15

let userNumber

function startGame() {
  let userAttack = Math.floor(Math.random() * 20) + 1
  let zombieAttack = Math.floor(Math.random() * 20) + 1

  let zombieNumber = Math.floor(Math.random() * 5) + 1
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'number',
        message: 'What is your number?',
        choices: [1, 2, 3, 4, 5],
      },
    ])
    .then((answer) => {
      userNumber = answer.number

      console.log("User's number is ", userNumber)
      console.log("Zombie's number is ", zombieNumber)

      if (userHealth > 0 && zombieHealth > 0) {
        if (userNumber === zombieNumber) {
          zombieHealth -= userAttack

          console.log("User's health is ", userHealth)
          console.log("User's attack is ", userAttack)
          console.log("Zombie's health is ", zombieHealth)
          console.log("Zombie's attack is ", zombieAttack)
        } else {
          userHealth -= zombieAttack
          console.log("User's health is ", userHealth)
          console.log("User's attack is ", userAttack)
          console.log("Zombie's health is ", zombieHealth)
          console.log("Zombie's attack is ", zombieAttack)
        }
        startGame()
      }
    })
}
startGame()
