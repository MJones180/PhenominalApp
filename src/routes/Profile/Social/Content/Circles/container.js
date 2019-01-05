import query from './query.graphql';

export default Component => (
  // HOC to grab the tab's data
  ({ dataWrapper }) => dataWrapper(query, 'circles', Component)
);
