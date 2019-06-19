import React from 'react';

export default Component => (
  class extends React.Component {
    constructor(props) {
      super(props);
      // Bind `this` to all class functions, makes them callable
      this.setEmail = this.setEmail.bind(this);
      // Initial State
      this.state = {
        email: '',
      };
    }
    // Triggers the notice that the authLink has been sent
    setEmail(email) {
      this.setState({ email });
    }
    // =======================
    // Render it
    // =======================
    render() {
      return (
        <Component
          email={this.state.email}
          setEmail={this.setEmail}
        />
      );
    }
  }
);
