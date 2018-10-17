import React, { Component } from 'react';
import Square from './Square';
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
                  '', '', '', '', '', '', '', '', '', '']
    }
  }

  checkShip = (playerMove) => {
    if (this.state.shipBoard[playerMove] === '1') {
      return true
    } else if (this.state.shipBoard[playerMove] === ''){
      return false
    }
  }

  render() {
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
        <Square id={index} checkShip={this.checkShip} />
      )
    })

    return (
      <div className="Board">
        {boardRows}
      </div>
    );
  }
}

export default Gameboard;
