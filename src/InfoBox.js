import React, { Component } from 'react';
import './App.css';

class InfoBox extends Component {
  render() {
    return (
      <div className="Info-Box">
        <h1>Battleship!</h1>
        {<br />}
        <h2>Torpedos Remaining: {this.props.torpedos}</h2>
        {<br />}
        <h2>Ship Hits: {this.props.shipHits}</h2>
        {<br />}
        <h1>{this.props.winStatus}</h1>
      </div>
    );
  }
}

export default InfoBox;
