import React from 'react';
import { currency } from 'utils/number';
import { compactDate } from 'utils/time';

export default Component => (
  ({ data }) => (
    <Component
      amountCharged={currency(data.amountCharged)}
      amountReceived={currency(data.amountReceived)}
      balance={currency(data.balance)}
      date={compactDate(data.date)}
      expiration={compactDate(data.expiration)}
      transactionID={data.transactionID}
    />
  )
);
