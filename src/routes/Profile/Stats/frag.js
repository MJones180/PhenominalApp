import gql from 'graphql-tag';

export default gql`
  fragment ProfileStats on Query {
    transactions: transactionsAggregate(forUser: true) {
      count
      total
    }
  }
`;
