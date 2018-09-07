// =================================
// Error Catching Component
// =================================

import React from 'react';
import FatalError from 'components/FatalError';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
    };
  }
  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({
      error: true,
    });
    // Log the error to the console
    console.log(error, info);
  }
  render() {
    if (this.state.error) {
      return <FatalError message="Something went wrong, please wait and try again." />;
    }
    return this.props.children;
  }
}
