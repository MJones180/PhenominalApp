import React from 'react';
import _ from 'lodash';
import Container from './container';
import AggregateWrapper from './AggregateWrapper';
import Event from '../Event';

export default Container(({ events }) => (
  _.map(events, (event, index) => (
    <AggregateWrapper data={event} key={index} tag={Event} />
  ))
));
