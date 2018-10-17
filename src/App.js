import React, { Component } from 'react';
import Gameboard from './Gameboard';
import './App.css';
import Water from './water.png';
// background url https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/BXDkzMFFeizetursq/videoblocks-a-birds-eye-view-shot-of-a-blue-ocean-camera-moves-forward_rx6p7vbig_thumbnail-full01.png
// explosion gif url https://www.amazing-animations.com/animations/fireworks10.gif

class App extends Component {
  render() {
    let styles = {
      backgroundImage: `url(${Water})`
    }
    return (
      <div className="App" style={styles}>
          <Gameboard />
      </div>
    );
  }
}

export default App;
