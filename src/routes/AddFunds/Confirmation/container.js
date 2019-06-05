import React from 'react';
import moment from 'moment';
import { currency } from 'utils/number';
import { compactDate } from 'utils/time';

export default Component => (
  ({ data }) => (
    <Component
      amountCharged={currency(data.amountCharged)}
      amountReceived={currency(data.amountReceived)}
      balance={currency(data.balance)}
      date={compactDate(data.date)}
      expirationDate={compactDate(moment(data.date).add(80, 'days'))}
      transactionID={data.transactionID}
    />
  )
);
