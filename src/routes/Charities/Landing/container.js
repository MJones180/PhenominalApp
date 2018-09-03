import gql from 'graphql-tag';
import query from 'utils/graphql/query';
import CurrentFrag from './Current/frag';
import UpcomingFrag from './Upcoming/frag';

export default Component => (
  () => (
    query({
      query: gql`
        query {
          CurrentEvents: eventsCurrent(
            orderBy: endDate_ASC
          ) {
            id
            ...CharitiesCurrent
          }
          UpcomingEvents: eventsUpcoming(
            orderBy: startDate_ASC
            first: 21
          ) {
            id
            ...CharitiesUpcoming
          }
          ${CurrentFrag}
          ${UpcomingFrag}
        }
      `,
      Component,
    })
  )
);
