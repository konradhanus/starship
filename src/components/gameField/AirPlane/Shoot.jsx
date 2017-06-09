import React, {Component} from 'react';

class Shoot extends Component {
    constructor(props) {
        super(props);
        this.state = {time: 0};
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
                this1.setState({
                    time: this1.state.time + 1
                });
            }else
            {
                this1.setState({
                    time: 0
                });
                clearInterval(interval);
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
        return(
            <div className="shoot"   style={{
                "bottom": this.props.airplane.y+this.state.time + "px",
                "left": this.props.airplane.x + "px"
            }}></div>
        );
    }
}

export default Shoot;