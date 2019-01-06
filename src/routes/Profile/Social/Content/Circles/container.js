import query from './query.graphql';

export default Component => (
  // HOC to grab the tab's data
  ({ dataWrapper, ownProfile }) => dataWrapper(query, 'circles', Component, { ownProfile })
);
