import React, { Component } from 'react';
import Square from './Square';
import InfoBox from './InfoBox';
import './App.css';

class Gameboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: 'blue',
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

  gameEnd = () => {
    if (!this.state.isActive) {
      return
    } else if (this.state.shipHits === 5){
      this.setState({
        isActive: false,
        winStatus: "You Win!"
      })
    } else if (this.state.totalClicks === 25) {
      this.setState({
        isActive: false,
        winStatus: "You Lose!"
      })
      return
    }
  }

  render() {
    this.gameEnd()
    let board = ['', '', '', '', '', '', '', '', '', '',
                    '', '', '', '', '', '', '', '', '', '',
                    '', '', '', '', '', '', '', '', '', '',
                    '', '', '', '', '', '', '', '', '', '',
                    '', '', '', '', '', '', '', '', '', '',
                    '', '', '', '', '', '', '', '', '', '',
                    '', '', '', '', '', '', '', '', '', '',
                    '', '', '', '', '', '', '', '', '', '',
                    '', '', '', '', '', '', '', '', '', '',
                    '', '', '', '', '', '', '', '', '', '']
    let boardRows = board.map((element, index) => {
      return (
        <Square id={index} checkShip={this.checkShip} isActive={this.state.isActive}/>
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
