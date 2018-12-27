import React from 'react';
import { comma, currency } from 'utils/number';
import Query from 'utils/graphql/query';
import query from './query.graphql';

export default (Component) => {
  const RenderComponent = ({ data: { users, transactions } }) => (
    <Component
      userCount={comma(users.aggregate.count)}
      donationCount={comma(transactions.count)}
      totalRaised={currency(transactions.total)}
      averageDonation={currency(transactions.total / transactions.count)}
    />
  );
  return () => <Query query={query} Component={RenderComponent} />;
};
