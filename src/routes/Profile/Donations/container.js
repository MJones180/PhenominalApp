import React from 'react';
import _ from 'lodash';
import { compactDate } from 'utils/time';
import Query from 'utils/graphql/query';
import query from './query.graphql';

export default (Component) => {
  class RenderComponent extends React.Component {
    constructor(props) {
      super(props);
      // Bind `this` to all class functions, makes them callable
      this.dateClick = this.dateClick.bind(this);
      // Group all donations from the same formatted date
      const donations = _.groupBy(this.props.data.user.transactions, ({ createdAt }) => compactDate(createdAt));
      // List of the dates
      const dates = _.keys(donations);
      // Default to the most recent date
      const activeDate = dates[0];
      // Bool for no donations yet
      const isEmpty = !activeDate;
      // Initial State
      this.state = {
        activeDate,
        dates,
        donations,
        isEmpty,
      };
    }
    // Triggered when a date is clicked
    dateClick(date) {
      // Switch current date
      this.setState({
        activeDate: date,
      });
    }
    render() {
      return <Component dateClick={this.dateClick} {...this.state} />;
    }
  }
  return username => <Query query={query} variables={username} Component={RenderComponent} />;
};
