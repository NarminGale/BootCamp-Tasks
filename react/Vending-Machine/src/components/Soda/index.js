import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Soda extends Component {
  render() {
    return (
      <div>
        <h3>OMG sugarr</h3>
        <Link to="/">Go Back</Link>
      </div>
    )
  }
}

export default Soda
