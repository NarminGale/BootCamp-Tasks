import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../VendingMachine/style.css'
class VendingMachine extends Component {
  render() {
    return (
      <div className="machine">
        <img url="https://www.renderhub.com/sietske/japanese-vending-machines/japanese-vending-machines-01.jpg" />
        <Link to="/soda">Soda</Link>
        <Link to="/chips">Chips</Link>
        <Link to="/sardines">Fresh Sardines</Link>
      </div>
    )
  }
}

export default VendingMachine
