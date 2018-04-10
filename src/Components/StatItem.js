import React, {Component} from 'react';

class StatItem extends Component {
  constructor(props){
    super(props);
    this.state={
      statValue: 1,
    }
  }

  decrement(){
    this.props.decrement(this);
  }

  increment(){
    this.props.increment(this);
  }

  render() {
    console.log(this.props.statAdjustment);
    let displayStat = this.state.statValue + this.props.statAdjustment;
    return (
      <div className="stat">
        {this.props.statType}
        <button type="button" onClick={this.decrement.bind(this)}>-</button>
        {displayStat}
        <button type="button" onClick={this.increment.bind(this)}>+</button>
      </div>
    );
  }
}

export default StatItem;
