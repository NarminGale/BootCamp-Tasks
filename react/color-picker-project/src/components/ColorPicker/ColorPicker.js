import React, { Component } from 'react'
import { SketchPicker } from 'react-color'
import './ColorPicker.css'
import PersistentDrawerLeft from '../ResponsiveDrawer/ResponsiveDrawer.js'
export class ColorPicker extends Component {
  state = {
    background: '#111',
  }
  handleChangeComplete = (color) => {
    this.setState({ background: color.hex })
  }

  render() {
    return (
      <div className="container">
        <PersistentDrawerLeft></PersistentDrawerLeft>
        {/* <SketchPicker
          color={this.state.background}
          onChangeComplete={this.handleChangeComplete}
        />
        <div
          className="color-name"
          style={{ backgroundColor: this.state.background }}>
          Color: <span>{this.state.background}</span>
        </div>

        <button
          type="button"
          className="add-button"
          style={{ backgroundColor: this.state.background }}>
          Add color
        </button> */}
      </div>
    )
  }
}

export default ColorPicker
