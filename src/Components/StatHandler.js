import React, {Component} from 'react';
import StatItem from './StatItem';

class StatHandler extends Component {
  constructor(props){
    super(props);
    this.state={
      statPoints: this.props.maxStatPoints,
      statTypeItems: this.props.characterStats.map((statType, i) => {
        return(
          <StatItem
            key = {statType}
            statType = {statType}
            minStatPoints = {this.props.minStatPoints}
            statAdjustment = {this.props.statAdjustment[i]}
            increment = {this.increment.bind(this)}
            decrement = {this.decrement.bind(this)}
          />
        );
      }),
    }
  }

  increment(stat){
    if(this.state.statPoints > 0){
      this.setState({
        statPoints: this.state.statPoints - 1
      });
      stat.setState({
        statValue: stat.state.statValue + 1
      });
    }
  }

  decrement(stat){
    if(stat.state.statValue > this.props.minStatPoints){
      this.setState({
        statPoints: this.state.statPoints + 1
      });
      stat.setState({
        statValue: stat.state.statValue - 1
      });
    }
  }

  render(){
    console.log(this.props.statAdjustment);
    return(
      <div>
        <h3>Stats</h3>
        <span>Stat Points {this.state.statPoints}</span><br />
        {this.state.statTypeItems}
      </div>
    );
  }
}

export default StatHandler;
