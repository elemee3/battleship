import React, { Component } from 'react';
import Gameboard from './Gameboard';
import Shipboard from './Shipboard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Gameboard />
          <Shipboard />
      </div>
    );
  }
}

export default App;
