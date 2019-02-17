import React from 'react';
import CountUp from 'react-countup';

export default class extends React.Component {
  constructor(props) {
    super(props);
    // Bind `this` to all class functions, makes them callable
    this.updateBalance = this.updateBalance.bind(this);
    // Initial State
    this.state = {
      balance: 3.14,
    };
  }
  componentDidMount() {
    this.updateBalance();
  }
  updateBalance() {
    // Update the balance every 5 seconds
    // First iteration starts at 4 seconds
    const updateBalance = firstTime => (
      // Wait to be executed
      setTimeout(() => {
        this.setState({
          // Number between 1.00 and 9.99
          balance: Math.floor((Math.random() * (10 * 89)) + 100) / 100,
        });
        // Update again
        updateBalance();
      }, firstTime ? 4000 : 5000)
    );
    // Update
    updateBalance(true);
  }
  render() {
    return (
      <CountUp
        end={this.state.balance}
        decimals={2}
        duration={1}
        prefix="$"
        start={0}
        useEasing
      />
    );
  }
}
