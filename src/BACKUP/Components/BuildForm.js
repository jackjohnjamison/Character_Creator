import React, { Component } from 'react';
import StatHandler from './StatHandler';
// import StatItem from './StatItem';


class BuildForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      age: this.props.ageMin,
      // statPoints: this.props.maxStatPoints,
      // statTypeItems: this.props.characterStats.map(statType  => {
      //   return <StatItem
      //           key = {statType}
      //           statType = {statType}
      //           minStatPoints = {this.props.minStatPoints}
      //           increment = {this.increment.bind(this)}
      //           decrement = {this.decrement.bind(this)}
      //         />
      //   }),
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
        console.log('W');
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

  // increment(stat){
  //   if(this.state.statPoints > 0){
  //     this.setState({
  //       statPoints: this.state.statPoints - 1
  //     });
  //     stat.setState({
  //       statValue: stat.state.statValue + 1
  //     });
  //   }
  // }
  //
  // decrement(stat){
  //   if(stat.state.statValue > this.props.minStatPoints){
  //     this.setState({
  //       statPoints: this.state.statPoints + 1
  //     });
  //     stat.setState({
  //       statValue: stat.state.statValue - 1
  //     });
  //   }
  // }

  render() {
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

          <StatHandler
            characterStats = {this.props.characterStats}
            maxStatPoints = {this.props.maxStatPoints}
            minStatPoints = {this.props.minStatPoints}
          />
          {/* <div>
            <h3>Stats</h3>
            <span>Stat Points {this.state.statPoints}</span><br />
            {this.state.statTypeItems}
          </div> */}

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
