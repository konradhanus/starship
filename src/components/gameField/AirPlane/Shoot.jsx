import React, {Component} from 'react';

class Shoot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 0,
            positionX: this.props.airplane.x,
            positionY: this.props.airplane.y,
            shoot: false 
        };
        //console.log(props);
       

        let this2 = this;
        document.addEventListener('keydown', 
        function(e){  
            this2.checkKey(e.which);
        });
        
    }

    timer(){
        let this1 = this;
        let interval = setInterval(function()
        { 
            if(this1.state.time < 1000)
            {
                //shoot first iteration
               if(this1.state.shoot === false)
               {
                    this1.setState({
                        time: this1.state.time + 10,
                        positionX: this1.props.airplane.x,
                        positionY: this1.props.airplane.y,
                        shoot: true
                    });
               }else
               {
                    this1.setState({
                        time: this1.state.time + 10,
                        shoot: true
                    });
               }
                
            }else
            {
                clearInterval(interval);
                this1.setState({
                    time: 0,
                    positionX: this1.props.airplane.x,
                    positionY: this1.props.airplane.y,
                    shoot: false
                });
                
            } 
        }, 1);
        
    }

    checkKey(e) {

        console.log(e);
        if (e == '32') {
            this.timer();
        }
        //this.props.detectColision();
    }

    render(){
        console.log(this.state.time);
        let temporaryPositionX, 
            temporaryPositionY;
        let visiblity;
        if(this.state.shoot){
          temporaryPositionX = this.state.positionX;
          temporaryPositionY = this.state.positionY;
           visiblity = "none";
        }else
        {
          temporaryPositionX = this.props.airplane.x;
          temporaryPositionY = this.props.airplane.y;
          visiblity = "hidden";
        }
        //hide
        return(
            <div className={this.state.shoot ? "shoot ": "shoot "}   style={{
                "bottom": temporaryPositionY+this.state.time+100 + "px",
                "left":  temporaryPositionX+49 +  "px"
            }}></div>
        );
    }
}

export default Shoot;