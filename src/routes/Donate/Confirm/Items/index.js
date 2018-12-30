import React from 'react';
import _ from 'lodash';
import Item from '../Item';

export default ({ data }) => {
  const { amount, transactions } = data;
  // Loop through each of the returned donation transactions
  return _.map(transactions, ({ balance, event, id }) => (
    <Item
      key={id}
      id={id}
      amount={amount}
      balance={balance}
      event={event}
    />
  ));
};
