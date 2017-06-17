import React, { Component } from 'react';
import GameField from './components/GameField.jsx';

class Game extends Component {
  constructor(){
    super();
    this.state = {
      time: 0
    };
    this.timer();
  }

  timer(){
    let this1 = this;
    setInterval(function(){ 
      this1.setState({
        time: this1.state.time + 1
      }); 
    }, 40);
    
  }

  render() {
    return (
      <div>
        <GameField timer={this.state.time} width={600} height={(window.innerHeight-150)}/>
      </div>
    );
  }
}

export default Game;
