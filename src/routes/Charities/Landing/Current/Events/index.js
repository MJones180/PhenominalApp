import React from 'react';
import _ from 'lodash';
import AggregateWrapper from './AggregateWrapper';
import Charity from '../Charity';
import SpecialFundraiser from '../SpecialFundraiser';

export default ({ data }) => {
  // Display the correct type of event
  const display = (type, Tag) => {
    // Filter for the correct event type
    const events = _.filter(data, data => data[type]);
    // Map all of the events
    return _.map(events, (event, index) => (
      // Insert the aggregate data and render the event
      <AggregateWrapper data={event} key={index} tag={Tag} />
    ));
  };
  return ([
    // Special Fundraisers
    display('specialFundraiser', SpecialFundraiser),
    // Charities
    display('charity', Charity),
  ]);
};
