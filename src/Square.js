import React, { Component } from 'react';
import './App.css';

class Square extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: 'blue'
    }
  }

  childClick = () => {
    //totalClick
    this.colorChanger()
  }

  colorChanger = () => {
    if (this.props.checkShip(this.props.id)) {
      this.setState({color: 'red'})
    } else {
      this.setState({color: 'white'})
    }
  }

  

  render() {
    let style = {
      backgroundColor: this.state.color
    }
    return (
      <div style={style} className="Square" onClick={this.childClick}>
        {this.props.id}
      </div>
    );
  }
}

export default Square;
