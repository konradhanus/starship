import React, {Component} from 'react';

class Enemy extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            x: props.enemy.x,
            y: props.enemy.y,
            gameFieldWidth: props.gameFieldWidth,
            gameFieldHeight: props.gameFieldHeight
        }
      

        let there = this;
        setInterval(function () {
            if (there.state.y < -100) {
                let x1 = (there.state.x);
                let y1 = there.state.gameFieldHeight+100;

                console.log(there.state.gameFieldHeight);
           

                let newState = there.state;
                newState.x = x1;
                newState.y = y1;
                there.setState({newState});
            } else {
                let x1 = (there.state.x);
                let y1 = (there.state.y) - 4;

                let newState = there.state;
                newState.x = x1;
                newState.y = y1;
                there.setState({newState});
            }
        }, 20);

    }

    render()
    {

        return (
            <div>({this.state.x}, {this.state.y})

                <img
                    src="assets/pictures/samolot4.png"
                    className="enemy"
                    style={{
                    left: this.state.x,
                    bottom: this.state.y
                }}/>
            </div>
        );
    }
}

export default Enemy;