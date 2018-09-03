import React from 'react';
import { comma, currency } from 'utils/number';

export default Component => (
  ({ data }) => (
    <Component
      userCount={comma(data.users.aggregate.count)}
      donationCount={comma(data.transactions.count)}
      totalRaised={currency(data.transactions.total)}
      averageDonation={currency(data.transactions.total / data.transactions.count)}
    />
  )
);
