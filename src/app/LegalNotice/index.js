import React from 'react';
import { isAuth } from 'utils/auth/user';
import { get, set } from 'utils/storage';
import Button from 'components/Button';
import Message from './Message';
import styles from './index.css';

export default class extends React.Component {
  constructor(props) {
    super(props);
    // Bind `this` to all class functions, makes them callable
    this.hide = this.hide.bind(this);
    // Initial State
    this.state = {
      display: null,
    };
  }
  componentWillMount() {
    // Only display the legal notice if:
    // - No user is currently authenticated
    // - The user has not already closed out of it
    this.setState({
      display: !isAuth() && !get.hideLegalNotice(),
    });
  }
  hide() {
    // Hide the legal notice
    set.hideLegalNotice();
    // Update the component
    this.setState({
      display: false,
    });
  }
  render() {
    // Check if the legal notice should be displayed or not
    if (this.state.display) {
      return (
        <div className={styles.container}>
          <Message />
          <Button
            className={styles.button}
            onClick={() => this.hide()}
          >
            Close
          </Button>
        </div>
      );
    } return false;
  }
}
