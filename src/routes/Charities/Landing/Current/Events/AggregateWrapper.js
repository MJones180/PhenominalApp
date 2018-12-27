import React from 'react';
import Query from 'utils/graphql/query';
import query from './query.graphql';

// Load all of the necessary aggregate data
// Done this way because of current Prisma limitations
export default ({ data, tag: Tag }) => {
  const RenderComponent = ({ data: { aggregateDonations } }) => (
    <Tag data={{ ...data, ...aggregateDonations }} />
  );
  return Query({
    query,
    variables: {
      eventID: data.id,
    },
    Component: RenderComponent,
  });
};
