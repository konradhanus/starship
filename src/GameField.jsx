import React, {Component} from 'react';
import AirPlane from './components/Airplane.jsx';
import Mines from './components/Mines.jsx';

class GameField extends Component {
  constructor() {
    super();
    this.state = {
      airplane: {
        x: 0,
        y: 0
      },
      mines: {
        x: 60,
        y: 300
      }
    }
  }

  goUp() {
    console.log(this.state);
    if (this.state.airplane.y + 10 + 100 < 500) {
      let y = this.state.airplane.y + 10;
      this.setState({
        airplane: {
          x: this.state.airplane.x,
          y: y
        }
      })
    }
  }

  goDown() {
    if (this.state.airplane.y - 10 > 0) {
      let y = this.state.airplane.y - 10;
      this.setState({
        airplane: {
          x: this.state.airplane.x,
          y: y
        }
      })
    }
  }

  goLeft() {
    if (this.state.airplane.x - 10 > 0) {
      let x = this.state.airplane.x - 10;
      this.setState({
        airplane: {
          x: x,
          y: this.state.airplane.y
        }
      })
    }
  }

  goRight() {
    if (this.state.airplane.x + 10 + 100 < 600) {
      let x = this.state.airplane.x + 10;
      this.setState({
        airplane: {
          x: x,
          y: this.state.airplane.y
        }
      })
    }
  }

  render() {
    return (
      <div>
        <div className="gameField">
          <AirPlane
            airplane={this.state.airplane}
            goUp={this.goUp.bind(this)}
            goDown={this.goDown.bind(this)}
            goLeft={this.goLeft.bind(this)}
            goRight={this.goRight.bind(this)}/>
          <Mines mines={this.state.mines}/>
        </div>
        <div>
          ({this.state.airplane.x},{this.state.airplane.y})
        </div>
      </div>
    );
  }
}

export default GameField;
