import gql from 'graphql-tag';

export default gql`
  fragment HomeStats on Query {
    users: usersConnection {
      aggregate {
        count
      }
    }
    transactions: transactionsAggregate {
      count
      total
    }
  }
`;
