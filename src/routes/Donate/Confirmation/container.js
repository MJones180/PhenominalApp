import React from 'react';
import { comma, currency } from 'utils/number';
import { compactDate } from 'utils/time';

export default Component => (
  ({ data }) => (
    <Component
      amount={currency(data.amount)}
      balance={currency(data.balance)}
      charityName={data.charityName}
      date={compactDate(data.date)}
      dotTotal={comma(data.dotTotal)}
      dotsGained={comma(data.dotsGained)}
      loopCount={comma(data.loopCount)}
      loopGained={data.loopGained}
      transactionID={data.transactionID}
    />
  )
);
