import React from 'react';
import _ from 'lodash';

export default Component => (
  class extends React.Component {
    constructor(props) {
      super(props);
      // Bind `this` to all class functions, makes them callable
      this.setTabContent = this.setTabContent.bind(this);
      this.tabClick = this.tabClick.bind(this);
      // Initial State
      this.state = {
        activeTab: 'halos',
        tabContent: {},
      };
    }
    // Set a tab's content once the data is fetched
    setTabContent(data) {
      // Save the tab's data
      this.setState({
        tabContent: _.merge(this.state.tabContent, data),
      });
    }
    // Triggered when a tab is clicked
    tabClick(tab) {
      // Switch current tab
      this.setState({
        activeTab: tab,
      });
    }
    render() {
      return (
        <Component
          {...this.props}
          {...this.state}
          setTabContent={this.setTabContent}
          tabClick={this.tabClick}
        />
      );
    }
  }
);
