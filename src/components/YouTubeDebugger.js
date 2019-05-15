// Code YouTubeDebugger Component Here
import React from 'react';

export default class YouTubeDebugger extends React.Component {
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

    setBitRate = (event) => {
        let newState = this.state.settings;
        console.log(newState.bitrate);
        this.setState({ 
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
         })
    }

    changeResolution = (event) => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    resolution: '720p'
                }
            }
        })
    }

    render() {
        return (
            <div>
                <button className="bitrate" onClick={this.setBitRate}>{this.state.settings.bitrate}</button>
                <button className="resolution" onClick={this.changeResolution}>{this.state.settings.video.resolution}</button>
                
            </div>
        )
    }
}