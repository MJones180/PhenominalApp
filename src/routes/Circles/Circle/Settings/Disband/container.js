import React from 'react';
import Mutation from 'utils/graphql/mutation';
import { push } from 'utils/history';
import { createAlert } from 'components/Alert';
import mutation from './mutation.graphql';

export default Component => (
  class extends React.Component {
    constructor(props) {
      super(props);
      // Bind `this` to all class functions, makes them callable
      this.click = this.click.bind(this);
    }
    click() {
      Mutation({
        mutation,
        variables: {
          id: this.props.id,
        },
        success: () => {
          // Alert the user that the Circle was deleted
          createAlert({
            text: 'Circle Deleted.',
            type: 'success',
          });
          // Redirect the user to their profile
          push('/profile');
        },
        error: () => {
          // Alert the user that an error has occured
          createAlert({
            text: 'An error has occurred.',
            type: 'error',
          });
        },
      });
    }
    render() {
      return <Component click={this.click} />;
    }
  }
);
