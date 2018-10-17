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
    if (this.props.isActive) {
      this.colorChanger()
    }
  }

  colorChanger = () => {
    if ((this.state.isActive) && this.props.checkShip(this.props.id)) {
      this.setState({
        color: 'red',
        isActive: false
      })
    } else if ((this.state.isActive) && !this.props.checkShip(this.props.id)){
      this.setState({
        color: 'white',
        isActive: false
      })
    } else {
      return
    }
  }

  finalColorChange = () => {
    // if the box is colored red, do nothing and break
    // if the board is inactive and the box id is found in shipLocations,
    //  change state of color to red
    if (this.state.color === 'red') {
      return
    } else if (!this.props.isActive && this.props.shipLocations.includes(this.props.id)) {
         this.setState({color: 'red'})
    }
  }


  render() {
    this.finalColorChange()
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
