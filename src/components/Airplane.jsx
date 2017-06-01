import React, {Component} from 'react';

class AirPlane extends Component {
    constructor(props) {
        super(props);
        //console.log(props);
        this.state = {
            x: props.airplane.x,
            y: props.airplane.y
        }

        document.onkeydown = this
            .checkKey
            .bind(this);
    }

    checkKey(e) {
        e = e || window.event;

        if (e.keyCode == '38') {
            this.props.goUp();
        } else if (e.keyCode == '40') {
            this.props.goDown();
        } else if (e.keyCode == '37') {
            this.props.goLeft();
        } else if (e.keyCode == '39') {
            this.props.goRight();
        }

        this.props.detectColision();
    }

    render() {
        return (
            <div
                className="airPlane"
                style={{
                "bottom": this.props.airplane.y + "px",
                "left": this.props.airplane.x + "px"
            }}>
                <img src="assets/pictures/samolot1.png"/>
            </div>
        );
    }
}

export default AirPlane;
