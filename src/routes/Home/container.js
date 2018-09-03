import gql from 'graphql-tag';
import query from 'utils/graphql/query';
import StatsFrag from './Stats/frag';

export default Component => (
  () => (
    query({
      query: gql`
        query {
          ...HomeStats
        }
        ${StatsFrag}
      `,
      Component,
    })
  )
);
