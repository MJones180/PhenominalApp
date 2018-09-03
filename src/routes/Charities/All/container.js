import React from 'react';
import _ from 'lodash';
import gql from 'graphql-tag';
import query from 'utils/graphql/query';

export default (Component) => {
  class Container extends React.Component {
    constructor(props) {
      super(props);
      // Bind `this` to all class functions, makes them callable
      this.inputChange = this.inputChange.bind(this);
      // Initial State
      const { charities } = this.props.data;
      this.state = {
        all: charities,
        filtered: charities,
        currentInput: '',
      };
    }
    inputChange({ target: { value: newInput } }) {
      const { all, filtered, currentInput } = this.state;
      // Convert the string to lowercase and remove leading/trailing whitespaces
      const parse = val => _.trim(_.toLower(val));
      // Parse the new input
      const parsedInput = parse(newInput);
      // If the new input contains the old input work off of the current filtered list
      const charities = _.includes(parsedInput, parse(currentInput)) ? filtered : all;
      // Check if the value contains the input
      const valid = val => _.includes(parse(val), parsedInput);
      this.setState({
        // Display only charities with values that contain the input
        filtered: _.filter(charities, ({ name, ein }) => valid(name) || valid(ein)),
        currentInput: newInput,
      });
    }
    render() {
      return (
        <Component
          change={this.inputChange}
          charities={this.state.filtered}
          input={this.state.currentInput}
        />
      );
    }
  }

  return () => query({
    query: gql`
      query {
        charities(orderBy: name_ASC) {
          ein
          name
        }
      }
    `,
    Component: Container,
  });
};
