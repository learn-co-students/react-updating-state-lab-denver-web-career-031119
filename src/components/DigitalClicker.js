// Code DigitalClicker Component Here
import React, {Component} from 'react'
export default class DigitalClicker extends Component {
  state = {
    timesClicked: 0
  }
  click = event => {
    const newCount = this.state.timesClicked+1
    this.setState({
      timesClicked: newCount
    })
  }
  render() {
    return (
      <button onClick={this.click}>{this.state.timesClicked}</button>
    )
  }
}
