import React, {Component} from 'react';
import AirPlane from './gameField/AirPlane.jsx';
import Artefacts from './gameField/Artefacts.jsx';
import Lifes from './gameField/Lifes.jsx';
import Enemy from './gameField/Enemy.jsx';
import Shoot from './gameField/AirPlane/Shoot.jsx';

class GameField extends Component {

  
  constructor() {
    super();
    this.state = {
      airplane: {
        x: 110,
        y: 0,
        life: 5,
        fuel: 100
      },
      artefacts: [
        {
          id: 0,
          x: 150,
          y: 300,
          boom: false,
          type: "mine",
          visible: true
        }, {
          id: 1,
          x: 250,
          y: 400,
          boom: false,
          type: "fuel",
          visible: true
        }
      ],
      enemys: [{
        x: 245,
        y: 350,
        speed: 20,
        type: 1, 
        visibility: 'visible',
        showExplosion: false
      },
      {
        x: 245,
        y: 350,
        speed: 30,
        type: 1, 
        visibility: 'visible',
        showExplosion: false
      },
      {
        x: 245,
        y: 350,
        speed: 17,
        type: 1, 
        visibility: 'visible',
        showExplosion: false
      },
      {
        x: 245,
        y: 350,
        speed: 13,
        type: 1, 
        visibility: 'visible',
        showExplosion: false
      }
      ]
    }

    this.enemyLocation = [{
      x: 0,
      y: 0 
    }, 
    {
      x: 0,
      y: 0 
    }]
  }



  goUp() {
    //console.log(this.state);
    if (this.state.airplane.y + 10 + 100 < this.props.height) {
      let newArray = this.state.airplane;
      newArray.y =  this.state.airplane.y + 15;
      newArray.fuel = this.state.airplane.fuel - 1;
      this.setState({
        airplane: newArray
      })
    }
  }

  goDown() {
    if (this.state.airplane.y - 10 > 0) {
      let newArray = this.state.airplane;
      newArray.y = this.state.airplane.y - 15;
      newArray.fuel = this.state.airplane.fuel - 1;
      this.setState({
        airplane: newArray
      })
    }
  }

  goLeft() {
    if (this.state.airplane.x - 10 > 0) {
      let newArray = this.state.airplane;
      newArray.x = this.state.airplane.x - 15;
      newArray.fuel = this.state.airplane.fuel - 1;
      this.setState({
        airplane: newArray
      })
    }
  }

  goRight() {
    if (this.state.airplane.x + 10 + 100 < this.props.width) {
      let newArray = this.state.airplane;
      newArray.x = this.state.airplane.x + 15;
      newArray.fuel = this.state.airplane.fuel - 1;
      this.setState({
        airplane: newArray
      })
    }
  }

  setEnemyVisibility(visibility, display, i)
  {
    //let i = 0;
    let enemys = this.state.enemys;
    enemys[i].visibility = visibility;
    enemys[i].display = display;

    this.setState({
      enemys: enemys
    })
  }

  setEnableEnemyExplosion(i)
  {
    //let i = 0;
    let showExplosion = true;
    let enemys = this.state.enemys;
    enemys[i].showExplosion = showExplosion;

    this.setState({
      enemys: enemys
    })
    let there = this;
    setTimeout(function(){ there.setDisableEnemyExplosion(i); }, 500);
    
  }

  setDisableEnemyExplosion(i)
  {
     //let i = 0;
    let showExplosion = false;
    let enemys = this.state.enemys;
    enemys[i].showExplosion = showExplosion;

    this.setState({
      enemys: enemys
    })
    this.setEnemyVisibility('hidden', 'none', i);
  }

  setEnemyLocation(x,y,i)
  {
     this.enemyLocation[i] = {
       x: x,
       y: y 
     };
  }

  getEnemyLocation(){
    return(this.enemyLocation);
  }

  
  detectColision() {
    var rect1 = {
      x: this.state.airplane.x,
      y: this.state.airplane.y,
      width: 100,
      height: 100
    }

    for (let i = 0; i < this.state.artefacts.length; i++) {
      var rect2 = {
        x: this.state.artefacts[i].x,
        y: this.state.artefacts[i].y,
        width: 50,
        height: 50
      }

      let newArray = [];
      newArray = this.state.artefacts;

      let newAirPlane = this.state.airplane;
      

      if (rect1.x < rect2.x + rect2.width && rect1.x + rect1.width > rect2.x && rect1.y < rect2.y + rect2.height && rect1.height + rect1.y > rect2.y) {
        // collision detected!
        newArray[i].boom = true;
        newAirPlane.life = this.state.airplane.life-1;
        this.setState({
          artefacts: newArray,
          airplane: newAirPlane
        })
      } else {
        newArray[i].boom = false;
        this.setState({
          artefacts: newArray
        })
      }
    }
  }

 
  render() {
    //console.log(this.enemyLocation);
    
    return (
      <div>
        <div className="gameField" style={{backgroundPositionY: this.props.timer, width: this.props.width, height: this.props.height}}>
          <Shoot 
            airplane={this.state.airplane} 
            getEnemyLocation={this.getEnemyLocation.bind(this)} 
            setEnemyVisibility={this.setEnemyVisibility.bind(this)} 
            setEnableEnemyExplosion={this.setEnableEnemyExplosion.bind(this)}
          />
         
          <AirPlane 
            airplane={this.state.airplane} 
            goUp={this.goUp.bind(this)}
            goDown={this.goDown.bind(this)}
            goLeft={this.goLeft.bind(this)}
            goRight={this.goRight.bind(this)}
            detectColision={this.detectColision.bind(this)}
            timer={this.props.timer}
          /> 

          {this.state.artefacts.map((m) => <Artefacts artefacts={m} airplane={this.state.airplane}/>)}

          {this.state.enemys.map((enemy, id) =>  
          <Enemy 
            enemy={this.state.enemys} 
            gameFieldWidth={this.props.width} 
            gameFieldHeight={this.props.height}  
            speed={enemy.speed} 
            setEnemyLocation={this.setEnemyLocation.bind(this)} 
            setEnemyVisibility={this.setEnemyVisibility.bind(this)} 
            id={id}
          />)}


          
            
            {/*<Enemy enemy={this.state.enemys} gameFieldWidth={this.props.width} gameFieldHeight={this.props.height}  speed={170}/>
            <Enemy enemy={this.state.enemys} gameFieldWidth={this.props.width} gameFieldHeight={this.props.height}  speed={150}/>
            <Enemy enemy={this.state.enemys} gameFieldWidth={this.props.width} gameFieldHeight={this.props.height}  speed={100}/>
            <Enemy enemy={this.state.enemys} gameFieldWidth={this.props.width} gameFieldHeight={this.props.height}  speed={130}/>*/}
        </div>
        <div className="scoring">
          <Lifes lifes={this.state.airplane.life} />  
          <br/><br/>
          fuel:{this.state.airplane.fuel}
          <br /><br />
          timer: {this.props.timer}
        </div>
      </div>
    );
  }
}

export default GameField;
