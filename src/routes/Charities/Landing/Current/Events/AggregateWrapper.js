import React from 'react';
import gql from 'graphql-tag';
import query from 'utils/graphql/query';

// Load all of the necessary aggregate data
// Done this way because of current Prisma limitations
export default ({ data, tag: Tag }) => {
  const RenderComponent = ({ data: { aggregateDonations } }) => (
    <Tag data={{ ...data, ...aggregateDonations }} />
  );
  return query({
    query: gql`
      query($eventID: String!) {
        aggregateDonations(forEvent: $eventID) {
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
