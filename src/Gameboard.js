import React, { Component } from 'react';
import Square from './Square';
import InfoBox from './InfoBox';
import './App.css';

class Gameboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shipBoard: ['1', '', '1', '', '1', '', '1', '', '1', '',
                  '', '', '', '', '', '', '', '', '', '',
                  '', '', '', '', '', '', '', '', '', '',
                  '', '', '', '', '', '', '', '', '', '',
                  '', '', '', '', '', '', '', '', '', '',
                  '', '', '', '', '', '', '', '', '', '',
                  '', '', '', '', '', '', '', '', '', '',
                  '', '', '', '', '', '', '', '', '', '',
                  '', '', '', '', '', '', '', '', '', '',
                  '', '', '', '', '', '', '', '', '', ''],
      totalClicks: 0,
      shipHits: 0,
      isActive: true,
      winStatus: "",
      shipLocations: []
    }
  }

  checkShip = (playerMove) => {
    let isHit = false
    if (this.state.shipBoard[playerMove] === '1') {
      isHit = true
      this.setState({
        totalClicks: this.state.totalClicks+1,
        shipHits: this.state.shipHits+1
      })
    } else if (this.state.shipBoard[playerMove] === ''){
      isHit = false
      this.setState({
        totalClicks: this.state.totalClicks+1
      })
    }
    return isHit
  }

  onlyCheckShip = (playerMove) => {
    if (this.state.shipBoard[playerMove] === '1') {
      return true
    } else if (this.state.shipBoard[playerMove] === '') {
      return false
    }
  }

  gameEnd = () => {
    if (!this.state.isActive) {
        return
    } else if (this.state.shipHits === 5){
        this.setState({
          isActive: false,
          winStatus: "You Win!"
      })
    } else if (this.state.totalClicks === 5) {
      this.showShips()
    }
  }

  showShips = () => {
    let { shipLocations } = this.state
    for(let i=0; i<100; i++) {
      if (this.state.shipBoard[i] !== '') {
        shipLocations.push(i)
      }
    }
    this.setState({
      isActive: false,
      winStatus: "You Lose!",
      shipLocations: shipLocations
    })
    console.log('shipLocations: ' + this.state.shipLocations)
  }

  render() {
    this.gameEnd()
    let boardRows = this.state.shipBoard.map((element, index) => {
      return (
        <Square id={index} checkShip={this.checkShip} isActive={this.state.isActive} onlyCheckShip={this.onlyCheckShip} shipLocations={this.state.shipLocations}/>
      )
    })

    return (
      <div className="Board">
        <InfoBox
          torpedos={25 - this.state.totalClicks}
          shipHits={this.state.shipHits}
          isActive={this.state.isActive}
          winStatus={this.state.winStatus}
        />
        {boardRows}
      </div>
    );
  }
}

export default Gameboard;
