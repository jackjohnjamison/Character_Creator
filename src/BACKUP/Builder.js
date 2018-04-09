import React, { Component } from 'react';
import BuildForm from './Components/BuildForm';
import './App.css';

class Builder extends Component {

  static defaultProps = {
    ageMin: 18,
    ageMax: 100,
    maxStatPoints: 10,
    minStatPoints: 1,
    characterClass: ['Warrior', 'Rouge', 'Mage'],
    characterStats: ['Strength', 'Agility', 'Precision', 'Guile', 'Attunement'],
  }

  render() {
    return (
      <div>
        <BuildForm
          ageMin = {this.props.ageMin}
          ageMax = {this.props.ageMax}
          maxStatPoints = {this.props.maxStatPoints}
          minStatPoints = {this.props.minStatPoints}
          characterClass = {this.props.characterClass}
          characterStats = {this.props.characterStats}
        />
      </div>
    );
  }
}

export default Builder;
