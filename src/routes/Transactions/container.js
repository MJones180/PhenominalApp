import gql from 'graphql-tag';
import query from 'utils/graphql/query';

export default Component => (
  () => (
    query({
      query: gql`
        query {
          currentUser {
            transactions(orderBy: createdAt_DESC) {
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
        }
      `,
      Component,
    })
  )
);
