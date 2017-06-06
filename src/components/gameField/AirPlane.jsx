import React, {Component} from 'react';

class AirPlane extends Component {
    constructor(props) {
        super(props);
        //console.log(props);
        this.state = {
            x: props.airplane.x,
            y: props.airplane.y,
            goUp: false,
            goDown: false,
            goLeft: false,
            goRight: false,
            time: 0 
        }
       
    this.timer();

        let this2 = this;
        document.addEventListener('keydown', function(e){  this2.checkKey(e.which);})
        document.addEventListener('keyup', function(e){ this2.unCheckKey(e.which);})
    }


    timer(){
        let this1 = this;
        setInterval(function()
        { 
            if(this1.state.goUp){this1.props.goUp();}
            if(this1.state.goDown){this1.props.goDown();}
            if(this1.state.goLeft){this1.props.goLeft();}
            if(this1.state.goRight){this1.props.goRight();}

            this1.setState({
                time: this1.state.time + 1
            }); 
        }, 40);
        
    }


    unCheckKey(e) {
    
        if (e == '38') {
            this.goUpStop();
        } else if (e == '40') {
            
            this.goDownStop();
        } else if (e == '37') {
            
            this.goLeftStop();
        } else if (e == '39') {
           
           this.goRightStop();
        }

        this.props.detectColision();
    }

    checkKey(e) {

        if (e == '38') {
            this.goDownStop();
            this.goUp();
        } else if (e == '40') {
            this.goUpStop();
            this.goDown();
        } else if (e == '37') {
            this.goRightStop();
            this.goLeft();
        } else if (e == '39') {
            this.goLeftStop();
            this.goRight();
        }

        this.props.detectColision();
    }


    goUp(){     this.setState({ goUp:true})}
    goDown(){   this.setState({ goDown:true})}
    goLeft(){   this.setState({ goLeft:true})}
    goRight(){  this.setState({ goRight:true})}

    goUpStop(){ this.setState({goUp:false})}
    goDownStop(){ this.setState({goDown:false})}
    goLeftStop(){ this.setState({goLeft:false})}
    goRightStop(){ this.setState({goRight:false})}

    render() {
      
        return (
            <div
                className="airPlane"
                style={{
                "bottom": this.props.airplane.y + "px",
                "left": this.props.airplane.x + "px"
            }}>{this.state.timer}
            
                <img src="assets/pictures/samolot1.png"/>
            </div>
        );
    }
}

export default AirPlane;
