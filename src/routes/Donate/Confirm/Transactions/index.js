import React from 'react';
import _ from 'lodash';
import Transaction from './Transaction';

export default ({ amount, transactions }) => (
  // Loop through each of the returned donation transactions
  _.map(transactions, ({ balance, event, id }) => (
    <Transaction
      key={id}
      id={id}
      amount={amount}
      balance={balance}
      event={event}
    />
  ))
);
