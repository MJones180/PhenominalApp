import React from 'react';
import { comma, currency } from 'utils/number';
import Query from 'utils/graphql/query';
import query from './query.graphql';

export default (Component) => {
  const RenderComponent = ({ data }) => (
    <Component
      donationCount={comma(data.transactions.count)}
      totalRaised={currency(data.transactions.total)}
      averageDonation={currency(data.transactions.total / (data.transactions.count || 1))}
    />
  );
  return () => <Query query={query} Component={RenderComponent} />;
};
