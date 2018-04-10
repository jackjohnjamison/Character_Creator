import React, { Component } from 'react';
import BuildForm from './Components/BuildForm';
import './App.css';


class Builder extends Component {
  static defaultProps = {
    ageMin: 18,
    ageMax: 100,
    characterClass: ['Warrior', 'Rouge', 'Mage'],
  }

  render() {
    return (
      <div>
        <BuildForm
          ageMin = {this.props.ageMin}
          ageMax = {this.props.ageMax}
          characterClass = {this.props.characterClass}
        />
      </div>
    );
  }
}

export default Builder;
