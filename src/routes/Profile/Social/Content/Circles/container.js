import otherProfileQuery from './otherProfileQuery.graphql';
import ownProfileQuery from './ownProfileQuery.graphql';

export default Component => (
  // HOC to grab the tab's data, the query depends on whos profile is being viewed
  ({ dataWrapper, ownProfile }) => dataWrapper(ownProfile ? ownProfileQuery : otherProfileQuery, 'circles', Component, { ownProfile })
);
