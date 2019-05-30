import React from 'react';
import { currency } from 'utils/number';

export default Component => (
  ({ balance, errors, setFieldError, values }) => {
    // Number of checked events
    const count = 1;
    // Amount to donate
    const { amount } = values;
    // If there is no other error, ensure the user has enough funds for the donations
    if (!errors.amount && count * amount > balance) {
      if (count > 1) {
        setFieldError('amount', `Insufficient funds to donate ${currency(amount)} to each of the checked events.`);
      } else {
        setFieldError('amount', 'Insufficient funds.');
      }
    }
    return <Component />;
  }
);
