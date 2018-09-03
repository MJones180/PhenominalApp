import React from 'react';
import { currency } from 'utils/number';

export default Component => (
  ({ setFieldTouched, setFieldValue, value }) => {
    // Format the number as currency
    const formattedAmount = currency(value);
    // The button click action
    const click = () => {
      setFieldTouched('amount', true);
      setFieldValue('amount', value);
    };
    return (
      <Component
        amount={formattedAmount}
        click={click}
      />
    );
  }
);
