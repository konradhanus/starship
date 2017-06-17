import React, {Component} from 'react';
import Shoot from './AirPlane/Shoot.jsx'

class Enemy extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            x: props.enemy[props.id].x,
            y: props.enemy[props.id].y,
            gameFieldWidth: props.gameFieldWidth,
            gameFieldHeight: props.gameFieldHeight,
            speed: props.speed
        }

        
      

        let there = this;
        setInterval(function () {
            if (there.state.y < -100) {
                let x1 = (there.state.x);
                let y1 = there.state.gameFieldHeight+10;

                //console.log(there.state.gameFieldHeight);
           

                let newState = there.state;
                newState.x = there.randomPositionX(there.state.gameFieldWidth);
                newState.y = y1;
                there.setState({newState});
                there.props.setEnemyVisibility('visible', 'inherit', there.props.id);
                
            } else {
                let x1 = (there.state.x);
                let y1 = (there.state.y) - 10;

                let newState = there.state;
                newState.x = x1;
                newState.y = y1;
                there.setState({newState});  
            }
        }, there.state.speed);

    }

    randomPositionX(max)
    {
        
        let random =  Math.floor((Math.random() * (max-100)) + 1);
        return random; 
    }

    render()
    {

        let visi, disp;
        visi = this.props.enemy[this.props.id].visibility;
        disp = this.props.enemy[this.props.id].display;
  

       this.props.setEnemyLocation(this.state.x, this.state.y, this.props.id);
        return (
            <div>({this.state.x}, {this.state.y})
            
                <img
                    src={this.props.enemy[this.props.id].showExplosion ? "assets/pictures/explosion.gif" : "assets/pictures/samolot4.png"}
                    className="enemy z"
                    style={{
                    left: this.state.x,
                    bottom: this.state.y, 
                    visibility: visi,
                    display: disp
                }}/>
            </div>
        );
    }
}

export default Enemy;