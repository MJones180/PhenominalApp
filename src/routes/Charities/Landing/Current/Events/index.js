import React from 'react';
import _ from 'lodash';
import AggregateWrapper from './AggregateWrapper';

export default ({ data }) => (
  // Map all of the events
  _.map(data, (event, index) => (
    // Insert the aggregate data and render the event
    <AggregateWrapper data={event} key={index} />
  ))
);
