// import React from 'react';
// import { Query } from 'react-apollo';
// import FatalError from 'components/FatalError';
// import Loading from 'components/Loaders/Bar';
//
// export default ({ query, variables, Component }) => (
//   <Query query={query} variables={variables} fetchPolicy="network-only">
//     {({ error, data }) => {
//       if (error) return <FatalError message="An unexpected error has occured, please try again soon." />;
//       else if (data) return <Component data={data} />;
//       return <Loading />;
//     }}
//   </Query>
// );


import React from 'react';
import FatalError from 'components/FatalError';
import Loading from 'components/Loaders/Bar';
import client from './apolloClient';

export default class extends React.Component {
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
      .then(({ data, error: errors }) => {
        this.setState({ data, errors });
      });
  }
  render() {
    const { Component } = this.props;
    const { data, errors } = this.state;
    if (errors) return <FatalError message="An unexpected error has occured, please try again soon." />;
    else if (data) return <Component data={data} />;
    return <Loading />;
  }
}
