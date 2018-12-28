import React from 'react';
import FatalError from 'components/FatalError';
import Loading from 'components/Loaders/Bar';
import client from './client';

class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    // Initial State
    this.state = {
      data: null,
      errors: null,
    };
  }
  componentDidMount() {
    const { query, variables } = this.props;
    client
      .query({ query, variables })
      .then(({ data, errors }) => this.setState({ data, errors }));
  }
  render() {
    const { Component } = this.props;
    const { data, errors } = this.state;
    if (errors) return <FatalError message="An unexpected error has occured, please try again soon." />;
    else if (data) return <Component data={data} />;
    return <Loading />;
  }
}

export default props => <Wrapper {...props} />;

// Query without a React component
export const simple = ({ query, variables }) => client.query({ query, variables });
