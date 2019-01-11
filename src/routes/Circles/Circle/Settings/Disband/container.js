import React from 'react';
import Mutation from 'utils/graphql/mutation';
import { push } from 'utils/history';
import { updatableAlert } from 'components/Alert';
import mutation from './mutation.graphql';

export default Component => (
  class extends React.Component {
    constructor(props) {
      super(props);
      // Bind `this` to all class functions, makes them callable
      this.click = this.click.bind(this);
    }
    click() {
      // Alert that request is being processed
      const updateAlert = updatableAlert('Circle is being deleted.');
      Mutation({
        mutation,
        variables: {
          id: this.props.id,
        },
        success: () => {
          // Alert the user that the Circle was deleted
          updateAlert({
            updatedText: 'Circle has been deleted.',
          });
          // Redirect the user to their profile
          push('/profile');
        },
        error: () => {
          // Alert the user that an error has occured
          updateAlert({
            type: 'error',
            updatedText: 'An error has occured, please try again soon.',
          });
        },
      });
    }
    render() {
      return <Component click={this.click} />;
    }
  }
);
