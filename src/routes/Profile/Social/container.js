import React from 'react';
import _ from 'lodash';
import Query from 'utils/graphql/query';

export default Component => (
  class extends React.Component {
    constructor(props) {
      super(props);
      // Bind `this` to all class functions, makes them callable
      this.dataWrapper = this.dataWrapper.bind(this);
      this.tabClick = this.tabClick.bind(this);
      // Initial State
      this.state = {
        activeTab: 'halos',
        tabContent: {},
      };
    }
    // Wrapper to grab the data for tab contents
    dataWrapper(query, tab, Component, props) {
      const RenderComponent = ({ data }) => {
        // Save the data so it only has to be grabbed once
        this.setState({
          tabContent: _.merge(this.state.tabContent, { [tab]: data }),
        });
        return <Component data={data[tab]} {...props} />;
      };
      // Check if the data has already been grabbed
      if (this.state.tabContent[tab]) return <Component data={this.state.tabContent[tab]} {...props} />;
      // Fetch the data
      return <Query query={query} variables={{ username: this.props.username }} Component={RenderComponent} />;
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
          activeTab={this.state.activeTab}
          dataWrapper={this.dataWrapper}
          ownProfile={this.props.ownProfile}
          tabClick={this.tabClick}
          username={this.props.username}
        />
      );
    }
  }
);
