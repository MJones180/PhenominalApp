import Query from 'utils/graphql/query';
import query from './query.graphql';

export default Component => (
  () => (
    Query({
      query,
      Component,
    })
  )
);
