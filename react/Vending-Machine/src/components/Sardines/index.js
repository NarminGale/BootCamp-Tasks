import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Sardines extends Component {
  render() {
    return (
      <div>
        <h1>you don't eat the sardines. the sardines, they eat you!</h1>
        <Link to="/">Go Back</Link>
      </div>
    )
  }
}

export default Sardines
