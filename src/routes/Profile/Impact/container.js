import React from 'react';
import { comma, currency } from 'utils/number';
import Query from 'utils/graphql/query';
import query from './query.graphql';

export default (Component) => {
  const RenderComponent = ({ data }) => (
    <Component
      donationCount={comma(data.donations.count)}
      totalRaised={currency(data.donations.total)}
      averageDonation={currency(data.donations.total / (data.donations.count || 1))}
    />
  );
  return () => <Query query={query} Component={RenderComponent} />;
};
