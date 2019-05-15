import React from 'react'

export default class DigitalClicker extends React.Component {
  state = {
    timesClicked: 0
  }

  handleOnClick = () => {
    const newTimesClicked = this.state.timesClicked + 1
    this.setState({ timesClicked: newTimesClicked})
  }

  render() {
    return(
      <button onClick={this.handleOnClick}>{this.state.timesClicked}</button>
    )
  }
}
