import gql from 'graphql-tag';

export default gql`
  fragment ProfileTransactions on User {
    transactions(orderBy: createdAt_DESC, first: 10) {
      createdAt
      amount
      balance
      type
      event {
        charity {
          name
        }
        specialFundraiser {
          name
        }
      }
    }
  }
`;
