import React from 'react';
import Loading from 'components/Loaders/Spinner';
import grabUserData from 'utils/auth/grabUserData';

// Wrapper to grab the current user
export default class extends React.Component {
  constructor(props) {
    super(props);
    // Bind `this` to all class functions, makes them callable
    this.auth = this.auth.bind(this);
    // Initial State
    this.state = {
      complete: null,
    };
  }
  componentDidMount() {
    this.auth();
  }
  async auth() {
    // Grab the current user's data and update the state if they are auth
    await grabUserData();
    // Done fetching the data
    this.setState({ complete: true });
  }
  render() {
    return this.state.complete ? this.props.children : <Loading />;
  }
}
