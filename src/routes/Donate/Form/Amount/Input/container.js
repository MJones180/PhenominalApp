import React from 'react';

export default Component => (
  ({ balance, errors, setFieldError, values }) => {
    // Amount to donate
    const { amount } = values;
    // If there is no other error, ensure the user has enough funds for the donation
    if (!errors.amount && amount > balance) {
      setFieldError('amount', 'Insufficient funds.');
    }
    return <Component />;
  }
);
