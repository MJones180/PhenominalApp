import React from 'react';
import Query from 'utils/graphql/query';
import query from './query.graphql';

export default (Component) => {
  const RenderComponent = ({ data: { currentUser } }) => <Component {...currentUser} />;
  return () => <Query query={query} Component={RenderComponent} />;
};
