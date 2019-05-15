// Code YouTubeDebugger Component Here
import React, {Component} from 'react'

class YouTubeDebugger extends Component{
  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: '1080p'
      }
    }
}

handleBitRateClick = () => {
  this.setState({
    settings: {
          ...this.state.settings,
          bitrate: 12
        }
  })
}

handleResolutionClick = () => {
  this.setState({
    settings: {
  ...this.state.settings,
      video: {
        ...this.state.settings.video,
        resolution: '720p'
      }
    }
  })
}


render(){
  return(
    <div>
      <button className='bitrate' onClick={this.handleBitRateClick}>{this.state.settings.bitrate} </button>
      <button className='resolution' onClick={this.handleResolutionClick} >{this.state.settings.resolution}</button>
    </div>
  )

}



}

export default YouTubeDebugger
