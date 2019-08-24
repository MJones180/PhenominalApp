import React from 'react';
import { currency } from 'utils/number';
import Query from 'utils/graphql/query';
import query from './query.graphql';

export default (Component) => {
  const RenderComponent = ({ data: { aggregateDonations } }) => (
    <Component totalRaised={currency(aggregateDonations.total)} />
  );
  return () => <Query query={query} Component={RenderComponent} />;
};
