import React from 'react';
import _ from 'lodash';
import { currentUser } from 'utils/auth/user';
import Signin from '../Signin';

// Grab the current user's data
export default Component => currentUser(
  class extends React.Component {
    constructor(props) {
      super(props);
      // Bind `this` to all class functions, makes them callable
      this.setDropdownClicked = this.setDropdownClicked.bind(this);
      this.setHideDropdown = this.setHideDropdown.bind(this);
      this.handleClick = this.handleClick.bind(this);
      this.click = this.click.bind(this);
      // Initial State
      this.state = {
        dropdownClicked: false,
        dropdownVisible: false,
      };
    }
    // Shorthand to set the state
    setDropdownClicked(bool) {
      this.setState({
        dropdownClicked: bool,
      });
    }
    // Hide the dropdown
    setHideDropdown() {
      this.handleClick();
      this.setState({
        dropdownVisible: false,
      });
    }
    // Check whether the dropdown should be displayed or not
    handleClick() {
      // Check if the click was within the dropdown
      const clicked = this.state.dropdownClicked;
      // Reset the click state
      this.setDropdownClicked(false);
      // If the click was within the dropdown, keep it displayed
      if (clicked) return;
      // If the dropdown was not clicked, hide it
      this.click();
    }
    // Listen for page clicks so the dropdown can be displayed as needed
    click() {
      if (this.state.dropdownVisible) document.removeEventListener('click', this.handleClick, false);
      else document.addEventListener('click', this.handleClick, false);
      // Flip the visibility of the dropdown
      this.setState(({ dropdownVisible }) => ({
        dropdownVisible: !dropdownVisible,
      }));
    }
    render() {
      const { dropdownVisible } = this.state;
      const { user } = this.props;
      // If the user is not logged in, display the Signin button
      if (_.isEmpty(user)) return <Signin />;
      return (
        <Component
          click={this.click}
          displayDropdown={dropdownVisible}
          dropdownClick={() => this.setDropdownClicked(true)}
          hideDropdown={() => this.setHideDropdown()}
          name={`${user.nameFirst} ${user.nameLast}`}
        />
      );
    }
  }
);
