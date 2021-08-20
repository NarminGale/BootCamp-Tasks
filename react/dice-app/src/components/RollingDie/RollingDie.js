import React from 'react'
import Dice from '../Dice/Dice.js'

class RollingDie extends React.Component {
  constructor() {
    super()
    this.state = {
      die1: 'one',
      die2: 'one',
      rolling: false,
    }

    this.numbers = ['one', 'two', 'three', 'four', 'five', 'six']

    this.onClick = this.onClick.bind(this)
  }

  onClick(e) {
    const die1 = this.numbers[Math.floor(Math.random() * this.numbers.length)]
    const die2 = this.numbers[Math.floor(Math.random() * this.numbers.length)]

    this.setState({
      die1,
      die2,
      rolling: true,
    })

    setTimeout(() => {
      this.setState({
        rolling: false,
      })
    }, 1000)
  }

  render() {
    return (
      <React.Fragment>
        <Dice num={this.state.die1} rolling={this.state.rolling}></Dice>
        <Dice num={this.state.die2} rolling={this.state.rolling}></Dice>

        <button onClick={this.onClick} disabled={this.state.rolling}>
          Roll
        </button>
      </React.Fragment>
    )
  }
}

export default RollingDie
