import React, { Component } from 'react';
import { CounterActions } from '.';

type CounterProps = {
  count: number;
  actions: CounterActions;
};

type CounterState = {
  amount: number;
};

export default class Counter extends Component<CounterProps, CounterState> {
  constructor(props) {
    super(props);
    this.state = {
      amount: 2,
    };
  }

  hanleInputValue = (e) => {
    this.setState({
      amount: e.target.value,
    });
  };

  render() {
    const {
      count,
      dispatch,
      actions: { increment, decrement, incrementByAmount, incrementAsync },
    } = this.props;

    return (
      <div>
        <div>
          <button onClick={() => increment()}>+</button>
          <span>{count}</span>
          <button onClick={() => decrement()}>-</button>
        </div>
        <div>
          <input
            type="text"
            value={this.state.amount}
            onChange={this.hanleInputValue}
          />
          <button onClick={() => incrementByAmount(Number(this.state.amount))}>
            Add Amount
          </button>
          <button onClick={() => incrementAsync(Number(this.state.amount))}>
            Add Async
          </button>
        </div>
      </div>
    );
  }
}
