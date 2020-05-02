import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import logo from './logo.svg';
import './App.css';
import './style.css';


export default  class ExploreBar extends Component {
    render() {
      return (
        <div class="just-flex">
          <h1 class="video-title recobox">Playlist</h1>
          <h1 class="info-text bold">learning path:</h1>
          <p class="tag-text">machine learning</p>
        </div>
      )
    }
  }
  