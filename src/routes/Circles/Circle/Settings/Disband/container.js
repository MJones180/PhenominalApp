import React from 'react';
import Mutation from 'utils/graphql/mutation';
import { push } from 'utils/history';
import createAlert from 'components/Alert';
import mutation from './mutation.graphql';

export default Component => (
  class extends React.Component {
    constructor(props) {
      super(props);
      // Bind `this` to all class functions, makes them callable
      this.click = this.click.bind(this);
    }
    click() {
      const alert = createAlert('Circle is being deleted.');
      Mutation({
        mutation,
        variables: {
          id: this.props.id,
        },
        success: () => {
          alert.success('Circle has been deleted.');
          // Redirect the user to their profile
          push('/profile');
        },
        error: () => alert.error(),
      });
    }
    render() {
      return <Component click={this.click} />;
    }
  }
);
