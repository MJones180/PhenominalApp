import React from 'react';
import { currency } from 'utils/number';

export default Component => (
  ({ id, amount, balance, event }) => (
    <Component
      id={id}
      amount={currency(amount)}
      balance={currency(balance)}
      event={event}
    />
  )
);
