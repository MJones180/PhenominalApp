import gql from 'graphql-tag';
import query from 'utils/graphql/query';
import InfoFrag from './Info/frag';
import StatsFrag from './Stats/frag';
import TransactionsFrag from './Transactions/frag';

export default Component => (
  () => (
    query({
      query: gql`
        query {
          currentUser {
            ...ProfileInfo
            ...ProfileTransactions
          }
          ...ProfileStats
          ${InfoFrag}
          ${StatsFrag}
          ${TransactionsFrag}
        }
      `,
      Component,
    })
  )
);
