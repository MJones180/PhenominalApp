import React from 'react';
import Query from 'utils/graphql/query';
import Charity from './Charity';
import query from './query.graphql';

// Load all of the necessary aggregate data
// Done this way because of current Prisma limitations
export default ({ data }) => {
  const RenderComponent = ({ data: { aggregateDonations } }) => (
    <Charity data={{ ...data, ...aggregateDonations }} />
  );
  return Query({
    query,
    variables: {
      eventID: data.id,
    },
    Component: RenderComponent,
  });
};
