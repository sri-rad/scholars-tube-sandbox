import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import logo from './logo.svg';
import './App.css';
import './style.css';
import video_data from './videos.json'


class VideoBox extends Component {
  render() {
    return (        
      <div class="video-box">
      <img src={"https://i.ytimg.com/vi/"+this.props.video_id + "/hqdefault.jpg"} alt="Video thumbnail" class="video-box__thumbnail"></img>
      <div class="video-box__details">
        <h3>{this.props.title}</h3>
        <p>{this.props.channel_name}</p>
        {/* <p>969K views</p> */}
      </div>
    </div>)
  }
}



export default class VideoContainer extends Component {
    getVideos() {
        return video_data.map(obj => {
            return <VideoBox title={obj.title} channel_name={obj.channel_name} video_id={obj.video_id}></VideoBox>
        })
    }

    render() {
      return (
        <div class="playlist__container">
            {this.getVideos()}
        </div>
      )
    }
  }
  


