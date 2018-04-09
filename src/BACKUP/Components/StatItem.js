import React, {Component} from 'react';

class StatItem extends Component {
  constructor(props){
    super(props);
    this.state={
      statValue: this.props.minStatPoints,
      statAdjustment: 0,
    }
  }

  decrement(){
    this.props.decrement(this);
  }

  increment(){
    this.props.increment(this);
  }

  render() {
    return (
      <div className="stat">
        {this.props.statType}
        <button type="button" onClick={this.decrement.bind(this)}>-</button>
        {this.state.statValue + this.state.statAdjustment}
        <button type="button" onClick={this.increment.bind(this)}>+</button>
      </div>
    );
  }
}

export default StatItem;
