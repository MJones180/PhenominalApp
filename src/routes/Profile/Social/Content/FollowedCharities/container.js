import React from 'react';
import Query from 'utils/graphql/query';
import query from './query.graphql';

export default Component => (
  ({ tabContent, setTabContent, username }) => {
    const RenderComponent = ({ data: { user: { followedCharities } } }) => {
      // Save the data so it only has to be grabbed once
      setTabContent({ followedCharities });
      return <Component data={followedCharities} />;
    };
    // Check if the data has already been grabbed
    if (tabContent.followedCharities) return <Component data={tabContent.followedCharities} />;
    // Fetch the data
    return <Query query={query} variables={{ username }} Component={RenderComponent} />;
  }
);
