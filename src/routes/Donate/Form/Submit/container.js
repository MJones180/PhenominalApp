import React from 'react';
import { currency } from 'utils/number';

export default Component => (
  ({ values }) => {
    const { amount, checkedEvents } = values;
    return (
      <Component
        amount={currency(amount)}
        total={currency(amount)}
      />
    );
  }
);
