import React from 'react';
import _ from 'lodash';
import { simple } from 'utils/graphql/query';
import query from './query.graphql';

export default Component => (
  class extends React.Component {
    constructor(props) {
      super(props);
      // Bind `this` to all class functions, makes them callable
      this.fetchUsers = this.fetchUsers.bind(this);
      this.inputChange = this.inputChange.bind(this);
      // Initial State
      this.state = {
        loading: false,
        results: undefined,
        searchValue: '',
      };
    }
    // Grab the users from the search input
    async fetchUsers() {
      // Disable the button
      this.setState({ loading: true });
      // Grab the users
      await simple({
        query,
        variables: {
          search: _.trim(_.toLower(this.state.searchValue)),
          // Don't search for the Circle owner
          owner: this.props.ownerUsername,
        },
      })
        // Add the data to the state and re-enable the button
        .then(({ data }) => (
          this.setState({
            loading: false,
            results: data.users,
          })
        ));
    }
    // Update state on input change
    inputChange({ target: { value: searchValue } }) {
      this.setState({ searchValue });
    }
    render() {
      return <Component id={this.props.id} {...this.state} fetchUsers={this.fetchUsers} inputChange={this.inputChange} />;
    }
  }
);
