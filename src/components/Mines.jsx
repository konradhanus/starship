import React, {Component} from 'react';

class Mines extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.mines.id,
      x: props.mines.x,
      y: props.mines.y
    }
  }

  // componentWillUpdate(){
  //   console.log(this.state.x1, this.state.y1);
  // }

  render() {
    console.log(this.state.id)
    return (
      <div
        className="minesBasic"
        style={{
        "bottom": this.state.y + "px",
        "left": this.state.x + "px"
      }}>
          {this.props.boom ?
            <img src="assets/pictures/explosion.gif"/> :
            <img src="assets/pictures/mine.png"/>
          }
      </div>
    );
  }
}

export default Mines;
