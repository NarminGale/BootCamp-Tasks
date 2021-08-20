import React from 'react'
import PropTypes from 'prop-types'
import './Dice.css'

class Dice extends React.Component {
  static defaultProps = {
    num: 'one',
    rolling: false,
  }

  render() {
    return (
      <div
        className={`Dice fas fa-dice-${this.props.num} ${
          this.props.rolling && 'shaking'
        }`}></div>
    )
  }
}

Dice.propTypes = {
  num: PropTypes.oneOf(['one', 'two', 'three', 'four', 'five', 'six']),
}

export default Dice
