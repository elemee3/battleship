import React, { Component } from 'react';
import './App.css';

class InfoBox extends Component {
  render() {
    return (
      <div className="Info-Box">
        Battleship!
        {<br />}
        Torpedos Remaining: {this.props.torpedos}
        {<br />}
        Ship Hits: {this.props.shipHits}
      </div>
    );
  }
}

export default InfoBox;
