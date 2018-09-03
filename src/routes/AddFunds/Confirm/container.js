import React from 'react';
import { currency } from 'utils/number';

export default Component => (
  ({ data }) => (
    <Component
      amountCharged={currency(data.amountCharged)}
      amountReceived={currency(data.amountReceived)}
      balance={currency(data.balance)}
      transactionID={data.transactionID}
    />
  )
);
