import React from 'react';
import _ from 'lodash';

export default class extends React.Component {
  constructor(props) {
    super(props);
    // Bind `this` to all class functions, makes them callable
    this.onTabClick = this.onTabClick.bind(this);
    this.mapTabs = this.mapTabs.bind(this);
    this.mapContent = this.mapContent.bind(this);
    // Initial State
    this.state = {
      activeTab: this.props.children[0].props.label,
    };
  }
  onTabClick(label) {
    // Update the active tab
    this.setState({ activeTab: label });
  }
  mapTabs() {
    const { activeTab } = this.state;
    // Loop through the children
    return _.map(this.props.children, (child, index) => {
      const { label, className, activeClassName } = child.props;
      // Display the tab
      return (
        <div
          key={index}
          className={(activeTab == label) ? `${className} ${activeClassName}` : className}
          onClick={() => this.onTabClick(label)}
        >
          {label}
        </div>
      );
    });
  }
  mapContent() {
    // Loop through the children
    return _.map(this.props.children, ({ props: { label, children } }) => (
      // Display the content if the tab is active
      (label == this.state.activeTab) ? children : false)
    );
  }
  render() {
    return (
      <div className={this.props.className}>
        <div className={this.props.tabsClassName}>
          {this.mapTabs()}
        </div>
        <div className={this.props.contentClassname}>
          {this.mapContent()}
        </div>
      </div>
    );
  }
}
