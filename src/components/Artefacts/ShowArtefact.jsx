import React, {Component} from 'react';

class ShowArtefact extends Component {
    constructor(props) {
        super(props);
        this.state= {url : ""};
    }

    componentWillMount(){
        this.getPicture(this.props.type);
    }

    getPicture(type) {
        switch (type) {
            case 'mine':
                this.setState({url: "mine.png"});
                break;
            case 'fuel':
                this.setState({url: "fuel.png"});
                break;
            default:
                this.setState({url: ""});
        }
    }

    render() {
      
        return (
            <div>
                <img src={"assets/pictures/" + this.state.url}/>
            </div>
        );
    }
}

export default ShowArtefact;
