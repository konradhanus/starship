import React, {Component} from 'react';

class Mines extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: props.mines.x,
      y: props.mines.y
    }
  }

  render() {
    return (
      <div
        className="minesBasic"
        style={{
        "bottom": this.state.y + "px",
        "left": this.state.x + "px"
      }}>
        <img src="assets/pictures/mine.png"/>
      </div>
    );
  }
}

export default Mines;
