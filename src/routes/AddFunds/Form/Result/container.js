import React from 'react';
import _ from 'lodash';
import { currency } from 'utils/number';

export default Component => (
  ({ amount }) => {
    // The amount of money the user will actually receieve
    // Stripe takes 2.9% + 30 cents and rounds the fee
    let processed = amount - _.round((amount * 0.029) + 30);
    // Do not show negative numbers
    if (processed < 0) processed = 0;
    return (
      <Component
        amountPassed={currency(amount)}
        amountProcessed={currency(processed)}
      />
    );
  }
);
