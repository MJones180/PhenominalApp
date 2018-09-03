import React from 'react';
import _ from 'lodash';
import Item from '../Item';

export default ({ data }) => {
  const { amount, balances, events, ids } = data;
  // Map through each of the returned donations
  return _.map(ids, (id, index) => (
    <Item
      key={id}
      id={id}
      amount={amount}
      balance={balances[index]}
      event={events[index]}
    />
  ));
};
