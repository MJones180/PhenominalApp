import React from 'react';
import Mutation from 'utils/graphql/mutation';
import signout from 'utils/auth/signout';
import createAlert from 'components/Alert';
import mutation from './mutation.graphql';

export default Component => (
  class extends React.Component {
    constructor(props) {
      super(props);
      // Bind `this` to all class functions, makes them callable
      this.click = this.click.bind(this);
      // Initial State
      this.state = {
        disable: false,
      };
    }
    click() {
      this.setState({ disable: true });
      const alert = createAlert('Processing.');
      Mutation({
        mutation,
        success: () => {
          alert.success('Complete.');
          // Sign the user out
          signout();
        },
        error: () => {
          // Enable the button
          this.setState({ disable: false });
          alert.error();
        },
      });
    }
    render() {
      return <Component click={this.click} disable={this.state.disable} />;
    }
  }
);
