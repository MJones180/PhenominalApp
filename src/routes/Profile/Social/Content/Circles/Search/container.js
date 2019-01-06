import React from 'react';
import _ from 'lodash';
import { simple } from 'utils/graphql/query';
import query from './query.graphql';

export default Component => (
  class extends React.Component {
    constructor(props) {
      super(props);
      // Bind `this` to all class functions, makes them callable
      this.fetchCircles = this.fetchCircles.bind(this);
      this.inputChange = this.inputChange.bind(this);
      // Initial State
      this.state = {
        loading: false,
        results: undefined,
        searchValue: '',
      };
    }
    // Grab the circles from the search input
    async fetchCircles() {
      // Disable the button
      this.setState({ loading: true });
      // Grab the circles
      await simple({
        query,
        variables: {
          search: _.trim(_.toLower(this.state.searchValue)),
        },
      })
        // Add the data to the state and re-enable the button
        .then(({ data }) => (
          this.setState({
            loading: false,
            results: data.circles,
          })
        ));
    }
    // Update state on input change
    inputChange({ target: { value: searchValue } }) {
      this.setState({ searchValue });
    }
    render() {
      return <Component {...this.state} fetchCircles={this.fetchCircles} inputChange={this.inputChange} />;
    }
  }
);
