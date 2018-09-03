import React from 'react';
import signin from 'utils/auth/signin';

export default Component => (
  class extends React.Component {
    constructor(props) {
      super(props);
      // Bind `this` to all class functions, makes them callable
      this.setLoading = this.setLoading.bind(this);
      this.signin = this.signin.bind(this);
      // Initial State
      this.state = {
        loading: false,
        newUser: false,
      };
    }
    setLoading(loading) {
      // Sets the loading state
      this.setState({
        loading,
      });
    }
    async signin(provider, token) {
      // If it is a new user update the local state to verify the information
      await signin(provider, token, (newUser) => {
        this.setLoading(false);
        this.setState({
          newUser,
        });
      });
    }
    // =======================
    // Render it
    // =======================
    render() {
      return (
        <Component
          {...this.state}
          setLoading={this.setLoading}
          signin={this.signin}
        />
      );
    }
  }
);
