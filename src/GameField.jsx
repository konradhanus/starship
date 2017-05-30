import React, { Component } from 'react';
import AirPlane from './components/Airplane.jsx';

class GameField extends Component {
  render() {
    return (
      <div className="gameField">
        <AirPlane/>
      </div>
    );
  }
}

export default GameField;
