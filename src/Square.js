import React, { Component } from 'react';
import './App.css';

class Square extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: 'blue',
      isActive: true,
    }
  }

  childClick = () => {
    //totalClick
    if (this.props.isActive) {
      this.colorChanger()
    }
  }

  colorChanger = () => {
    let { isActive } = this.state
    if ((this.state.isActive) && this.props.checkShip(this.props.id)) {
      isActive = false
      console.log('isActive: ' + isActive)
      this.setState({
        color: 'red',
        isActive: isActive
      })
    } else if ((this.state.isActive) && !this.props.checkShip(this.props.id)){
      isActive = false
      console.log('isActive: ' + isActive)
      this.setState({
        color: 'white',
        isActive: isActive
      })
    } else {
      return
    }
    console.log('last isActive: ' + this.state.isActive)
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
