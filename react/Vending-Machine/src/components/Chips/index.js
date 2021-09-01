import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Chips extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bags: 0,
    }
    this.buttonClick = this.buttonClick.bind(this)
  }

  buttonClick() {
    this.setState({
      bags: this.state.bags + 1,
    })
  }
  render() {
    return (
      <div>
        <h1>bags eaten: {this.state.bags}</h1>
        <button onClick={this.buttonClick}>nom nom nom</button>
        <h1>
          <Link to="/">Go Back</Link>
        </h1>
      </div>
    )
  }
}

export default Chips
