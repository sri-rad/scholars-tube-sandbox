import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import logo from './logo.svg';
import './App.css';
import './style.css';
import VideoContainer from './Video'
import InfoBar from './Playlist'
// import TagBar from './Playlist'

// class TagBar extends Component {
//   render() {
//     return (
//       <div class="just-flex">
//         <h1 class="video-title recobox">Explore</h1>
//         <div class="explore-tags">
//           <p class="tag-text">ml</p>
//           <p class="tag-text">sy</p>
//           <p class="tag-text">home workout</p>
//         </div>
//       </div>
//     )
//   }
// }

class PlaylistOverview extends Component {
  render() {
    return (        
      <div class="playlist__container">
      <div class="playlist-overview-box">
      <img src={"https://i.ytimg.com/vi/"+this.props.video_id + "/hqdefault.jpg"} alt="Video thumbnail" class="video-box__thumbnail"></img>
      <div class="video-box__details">
        <h3>{this.props.title}</h3>
        <p>{this.props.channel_name}</p>
        {/* <p>969K views</p> */}
      </div>
    </div>
    </div>)
  }
}

class NavBar extends Component {
  render() {
    return (    
    <nav class="nav-main">
    <ul class="nav--list">
      <ul class="nav--left">
        <li>
          <a href="#"><img src={process.env.PUBLIC_URL + "/img/youtube-logo.png"} alt="Youtube logo" /></a>
        </li>
      </ul>

      <ul class="nav--search">
        <li>
          <input class="input-search" type="text" name="Search" placeholder="Search" />
          <button><i class="fas fa-search"></i></button>
        </li>
      </ul>

      <ul class="nav--right">
        <h3 class="navbar_text">Explore</h3>
        <h3 class="navbar_text">Channels</h3>
        <h3 class="navbar_text">ToDo</h3>
        <h3 class="navbar_text">Logout</h3>
        <a href="#"><img src={process.env.PUBLIC_URL + "/img/user-profile.jpg"} alt="User Profile picture" /></a>
      </ul>
    </ul>
  </nav>)
  }
}

function App() {
  return ReactDOM.render(
    <div>
      <NavBar></NavBar>
      <main>
        <InfoBar></InfoBar>
        {/* <PlaylistOverview></PlaylistOverview> */}
        <VideoContainer></VideoContainer>
      </main>
      </div>,
    document.getElementById('root')
  );
}

export default App;
