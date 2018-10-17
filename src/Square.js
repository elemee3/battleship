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
    this.colorChanger()
  }

  colorChanger = () => {
    if (this.props.checkShip(this.props.id)) {
      console.log('red')
      this.setState({color: 'red'})
    } else {
      console.log('white')
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
