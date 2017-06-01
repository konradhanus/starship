import React, {Component} from 'react';
import AirPlane from './components/Airplane.jsx';
import Mines from './components/Mines.jsx';

class GameField extends Component {
  constructor() {
    super();
    this.state = {
      airplane: {
        x: 110,
        y: 0
      },
      mines: [{
        x: 150,
        y: 300,
        boom: false
      },{
       x: 250,
        y: 400,
        boom: false 
      }]
    }
  }

  goUp() {
    //console.log(this.state);
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

  detectColision(){
    var rect1 = {x: this.state.airplane.x, y: this.state.airplane.y, width: 100, height: 100}
    var rect2 = {x: this.state.mines.x, y: this.state.mines.y, width: 50, height: 50}

    if (rect1.x < rect2.x + rect2.width &&
      rect1.x + rect1.width > rect2.x &&
      rect1.y < rect2.y + rect2.height &&
      rect1.height + rect1.y > rect2.y) {
        // collision detected!
         this.setState({
            mines: {
              x: this.state.mines.x,
              y: this.state.mines.y,
              boom: true
            }
          })
    }
    else{
       this.setState({
            mines: {
              x: this.state.mines.x,
              y: this.state.mines.y,
              boom: false
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
            goRight={this.goRight.bind(this)}
            detectColision={this.detectColision.bind(this)}/>
          {this.state.mines.map((m) => <Mines mines={m} airplane={this.state.airplane}/>)}
          
        </div>
        <div>
          ({this.state.airplane.x},{this.state.airplane.y})
        </div>
      </div>
    );
  }
}

export default GameField;
