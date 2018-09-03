import gql from 'graphql-tag';

export default gql`
  fragment CharitiesUpcoming on Event {
    startDate
    charity {
      ein
      name
    }
  }
`;
