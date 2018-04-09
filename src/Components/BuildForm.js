import React, { Component } from 'react';
import Stats from './Stats';

class BuildForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      statAdjustment: [0, 0, 0, 0, 0],
      age: this.props.ageMin,
      classOptions: this.props.characterClass.map(classSelect => {
        return <option key={classSelect} value={classSelect}>{classSelect}</option>
      }),
    }
  }

  checkAge(e){
    if(e.target.value > this.props.ageMax){
      e.target.value = this.props.ageMax;
    } else if (e.target.value < this.props.ageMin){
      e.target.value = this.props.ageMin;
    }
  }

  changeClass(classType){
    classType = classType.target.value;
    switch(classType){
      case 'Warrior':
        this.setState({
          statAdjustment: [2, 1, 0, 0, 0],
        });
        break;
      case 'Rouge':
        console.log('R');
        break;
      case 'Mage':
        console.log('M');
        break;
      default:
        break;
    }
  }

  render(){
    return (
      <div>
        <h3>Character Builder V0.1</h3>

        <form className="build-form" ref="build-form">
          <h1>Character Builder</h1>

          <div>
            <label>Character Name</label><br />
            <input type="text"ref="nameInput" />
            <label>Age</label>
            <input type="number" defaultValue={this.state.age} min={this.props.ageMin}
              max={this.props.ageMax} onBlur={this.checkAge.bind(this)} />
          </div>

          <div>
            <label>Character Class</label><br />
            <select defaultValue="Select Class" onChange={this.changeClass.bind(this)}>
              <option hidden="true" disabled="disabled">Select Class</option>
              {this.state.classOptions}
            </select>
          </div>

          <Stats statAdjustment = {this.state.statAdjustment} />

          <div>
            <h3>Derived Stats</h3>
            {/* TODO */}
          </div>

          <div>
            <h3>Skills</h3>
            {/* TODO */}
          </div>

          <div>
            {/* Portrait Selector */}
          </div>

          <input type="submit" value="Create" />
          <button type="button">Reset</button>

        </form>

      </div>
    );
  }
}

export default BuildForm;
