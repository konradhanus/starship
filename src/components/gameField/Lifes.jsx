import React, {Component} from 'react';

class Lifes extends Component {    
    

    render()
    {
        let lifes = [];   
        for(let i = 1; i<= this.props.lifes; i++)
        {
            lifes.push(i);
        }
        return(
            <div>life: {lifes.map((life) => <i className="fa fa-fighter-jet" aria-hidden="true" />) }</div>
        );
    }
}

export default Lifes;