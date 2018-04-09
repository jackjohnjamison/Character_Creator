import React, {Component} from 'react';
import StatHandler from './StatHandler';

class Stats extends Component {
  static defaultProps = {
    maxStatPoints: 10,
    minStatPoints: 1,
    characterStats: ['Strength', 'Agility', 'Precision', 'Guile', 'Attunement'],
  }

  render(){
    console.log(this.props.statAdjustment);
    return(
      <StatHandler
        statAdjustment = {this.props.statAdjustment}
        characterStats = {this.props.characterStats}
        maxStatPoints = {this.props.maxStatPoints}
        minStatPoints = {this.props.minStatPoints}
      />
    )
  }
}

export default Stats;
