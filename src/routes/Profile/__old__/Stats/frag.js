import gql from 'graphql-tag';

export default gql`
  fragment ProfileStats on Query {
    transactions: aggregateDonations(forUser: true) {
      count
      total
    }
  }
`;
