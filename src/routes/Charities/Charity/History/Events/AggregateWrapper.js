import React from 'react';
import gql from 'graphql-tag';
import query from 'utils/graphql/query';

// Load all of the necessary aggregate data
// Done this way because of current Prisma limitations
export default ({ data, tag: Tag }) => {
  const RenderComponent = ({ data: { transactionsAggregate } }) => (
    <Tag data={{ ...data, ...transactionsAggregate }} />
  );
  return query({
    query: gql`
      query($eventID: String!) {
        transactionsAggregate(forEvent: $eventID) {
          count
          total
        }
      }
    `,
    variables: {
      eventID: data.id,
    },
    Component: RenderComponent,
  });
};
