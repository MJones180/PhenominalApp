import gql from 'graphql-tag';

export default gql`
  fragment CharityHistory on Event {
    id
    startDate
    goal
  }
`;
