import React, {Component} from 'react';
import ShowArtefact from './Artefacts/ShowArtefact.jsx';

class Artefacts extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className="artefactsBasic"
        style={{
        "bottom": this.props.artefacts.y + "px",
        "left": this.props.artefacts.x + "px"
      }}>
          {this.props.artefacts.visible ? (this.props.artefacts.boom ? 
            <img src="assets/pictures/explosion.gif"/> :
            <ShowArtefact type={this.props.artefacts.type}/>) : null
          }
      </div>
    );
  }
}

export default Artefacts;
