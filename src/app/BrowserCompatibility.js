// =================================
// Ensure Compatible Browser
// =================================

import React from 'react';
import { detect } from 'detect-browser';
import FatalError from 'components/FatalError';

export default class extends React.Component {
  constructor(props) {
    super(props);
    // Bind `this` to all class functions, makes them callable
    this.checkBrowser = this.checkBrowser.bind(this);
    // Initial State
    this.state = {
      ie: false,
    };
  }
  componentDidMount() {
    this.checkBrowser();
  }
  checkBrowser() {
    // Make sure the browser is detected
    const browser = detect();
    // Check if browser is Internet Explorer
    if (browser && (browser.name == 'ie')) {
      this.setState({ ie: true });
    }
  }
  render() {
    if (this.state.ie) {
      return <FatalError message="Internet Explorer is not supported, please use a different browser." />;
    }
    return this.props.children;
  }
}
