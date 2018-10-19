import React, { Component } from 'react';
import Square from './Square';
import InfoBox from './InfoBox';
import './App.css';

class Gameboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shipBoard: ['', '', '', '', '', '', '', '', '', '',
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
      this.setState({
        isActive: false,
        winStatus: "You Lose!"
      })
    }
  }


  positionShips = () => {
    // call each of the array generators
    let shipBoardTemp = ['', '', '', '', '', '', '', '', '', '',
                '', '', '', '', '', '', '', '', '', '',
                '', '', '', '', '', '', '', '', '', '',
                '', '', '', '', '', '', '', '', '', '',
                '', '', '', '', '', '', '', '', '', '',
                '', '', '', '', '', '', '', '', '', '',
                '', '', '', '', '', '', '', '', '', '',
                '', '', '', '', '', '', '', '', '', '',
                '', '', '', '', '', '', '', '', '', '',
                '', '', '', '', '', '', '', '', '', '']
    let shipLocationsTemp = []
    let newArr = []
    newArr.push(this.randomHorizTwoShip().join(','))
    newArr.push(this.randomVertTwoShip().join(','))
    newArr.push(this.randomHorizThreeShip().join(','))
    newArr.push(this.randomVertThreeShip().join(','))
    newArr.push(this.randomHorizFourShip().join(','))
    newArr.push(this.randomVertFourShip().join(','))
    shipLocationsTemp = newArr.join(',')
    console.log(shipLocationsTemp)
    this.checkNeighborShips(shipLocationsTemp, shipBoardTemp);
    this.fillShipBoard(shipLocationsTemp, shipBoardTemp);
    console.log(shipBoardTemp);
  }

  fillShipBoard = (shipLocationsTemp, shipBoardTemp) => {
    for (let i = 0; i < shipLocationsTemp.length; i++) {
      if (shipBoardTemp[shipLocationsTemp[i]] === '') {
        console.log("shipBoardTemp: " + shipBoardTemp);
        console.log("shipLocationsTemp: " + shipLocationsTemp)
        console.log("shipLocTemp at i: " + shipLocationsTemp[i]);
        console.log("shipBoardTemp at shipLocTemp at i: " + shipBoardTemp[shipLocationsTemp[i]]);
        shipBoardTemp[shipLocationsTemp[i]] = '1';
      }
    }
  }

  randomHorizTwoShip = () => {
    let indexOne = Math.floor(Math.random() * 100)
    let twoShip = []
    if ((indexOne + 1) % 10 === 0) {
      twoShip = [indexOne-1, indexOne]
    } else {
      twoShip = [indexOne, indexOne+1]
    }
    return twoShip
  }

  randomVertTwoShip = () => {
    let indexOne = Math.floor(Math.random() * 90)
    let twoShip = [indexOne, indexOne+10]
    return twoShip
  }

  randomHorizThreeShip = () => {
    let indexOne = Math.floor(Math.random() * 100)
    let threeShip = []
    if ((indexOne + 2) % 10 === 0) {
      threeShip = [indexOne-2, indexOne-1, indexOne]
    } else {
      threeShip = [indexOne, indexOne+1, indexOne+2]
    }
    return threeShip
  }

  randomVertThreeShip = () => {
    let indexOne = Math.floor(Math.random() * 80)
    let threeShip = [indexOne, indexOne+10, indexOne+20]
    return threeShip
  }

  randomHorizFourShip = () => {
    let indexOne = Math.floor(Math.random() * 100)
    let fourShip = []
    if ((indexOne + 3) % 10 === 0) {
      fourShip = [indexOne-3, indexOne-2, indexOne-1, indexOne]
    } else {
      fourShip = [indexOne, indexOne+1, indexOne+2, indexOne+3]
    }
    return fourShip
  }

  randomVertFourShip = () => {
    let indexOne = Math.floor(Math.random() * 70)
    let fourShip = [indexOne, indexOne+10, indexOne+20, indexOne+30]
    return fourShip
  }

  checkNeighborShips = (shipLocationsTemp,shipBoardTemp) => {
    console.log("yes");
    if (this.hasHorizontialNeighbor(shipLocationsTemp) && this.hasVerticalNeighbor(shipLocationsTemp, shipBoardTemp)) {
      console.log("hmm");
      this.setState({
        shipLocations: shipLocationsTemp,
        shipBoard: shipBoardTemp
      })
    } else {
      console.log("what did I do");
    }
  }

  hasHorizontialNeighbor = (shipLocationsTemp) => {
    // check if no more than 4 in a row (returns bool)
    // if there are more than 4 consecutive numbers
    let authentication = []
    for(let i=0; i<shipLocationsTemp.length; i++) {
      if (shipLocationsTemp[i]+1 === shipLocationsTemp[i+1]) {
        authentication.push(true)
      }
      if (shipLocationsTemp[i]+1 === shipLocationsTemp[i+1]) {
        if (shipLocationsTemp[i]+2 === shipLocationsTemp[i+2]) {
          authentication.push(true)
        }
      }
      if (shipLocationsTemp[i]+1 === shipLocationsTemp[i+1]) {
        if (shipLocationsTemp[i]+2 === shipLocationsTemp[i+2]) {
          if (shipLocationsTemp[i]+3 === shipLocationsTemp[i+3]) {
            authentication.push(true)
          }
        }
      }
      if (shipLocationsTemp[i]+1 === shipLocationsTemp[i+1]) {
        if (shipLocationsTemp[i]+2 === shipLocationsTemp[i+2]) {
          if (shipLocationsTemp[i]+3 === shipLocationsTemp[i+3]) {
            if (shipLocationsTemp[i]+4 === shipLocationsTemp[i+4]) {
              authentication.push(false)
            }
          }
        }
      }
    }
    return !authentication.includes(false)
  }

  hasVerticalNeighbor = (shipLocationsTemp,shipBoardTemp) => {
    let authentication = []
    for(let i=0; i<shipLocationsTemp.length; i++) {
      if (shipBoardTemp[shipLocationsTemp[i]+10] === '1') {
        if (this.neighborChecker(i)) {
          authentication.push(true)
        } else {
          authentication.push(false)
        }
      }
      if (shipBoardTemp[shipLocationsTemp[i]+10] === '1') {
        if (shipBoardTemp[shipLocationsTemp[i]+20] === '1') {
          if (this.neighborChecker(i)) {
            authentication.push(true)
          } else {
            authentication.push(false)
          }
        }
      }
      if (shipBoardTemp[shipLocationsTemp[i]+10] === '1') {
        if (shipBoardTemp[shipLocationsTemp[i]+20] === '1') {
          if (shipBoardTemp[shipLocationsTemp[i]+30] === '1') {
            if (this.neighborChecker(i)) {
              authentication.push(true)
            } else {
              authentication.push(false)
            }
          }
        }
      }
      if (shipBoardTemp[shipLocationsTemp[i]+10] === '1') {
        if (shipBoardTemp[shipLocationsTemp[i]+20] === '1') {
          if (shipBoardTemp[shipLocationsTemp[i]+30] === '1') {
            if (shipBoardTemp[shipLocationsTemp[i]+40] === '1') {
              if (this.neighborChecker(i)) {
                authentication.push(false)
              } else {
                authentication.push(false)
              }
            }
          }
        }
      }
    }
    return !authentication.includes(false)
  }

  neighborChecker = (i) => {
    let { shipLocationsTemp,shipBoardTemp } = this.state
    if ((shipBoardTemp[shipLocationsTemp[i]+1]!=='1') && (shipBoardTemp[shipLocationsTemp[i]-1]!=='1')) {
      return true
    } else {
      return false
    }
  }

  //only called once at start of game
  componentDidMount = () => {
    this.positionShips();
  }

  render() {
    console.log('shipLocations', this.state.shipLocations)
    this.gameEnd()
    let boardRows = this.state.shipBoard.map((element, index) => {
      return (
        <Square id={index} checkShip={this.checkShip} isActive={this.state.isActive} onlyCheckShip={this.onlyCheckShip} shipLocations={this.state.shipLocations}/>
      )
    })

    console.log(this.state.shipBoard);
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
