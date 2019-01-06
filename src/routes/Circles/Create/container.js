import React from 'react';
import Query from 'utils/graphql/query';
import query from './query.graphql';

export default (Component) => {
  const RenderComponent = ({ data: { currentUser: { circlesOwned } } }) => {
    // Do not allow the creation of a new Circle if the user already has 3
    if (circlesOwned.length > 3) return <Component circleLimitReached />;
    return <Component />;
  };
  return () => <Query query={query} Component={RenderComponent} />;
};
