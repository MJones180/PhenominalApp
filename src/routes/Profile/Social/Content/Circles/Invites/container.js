import React from 'react';
import Query from 'utils/graphql/query';
import query from './query.graphql';

export default Component => () => {
  const RenderComponent = ({ data: { currentUser: { circleInvites } } }) => <Component circleInvites={circleInvites} />;
  return <Query query={query} Component={RenderComponent} />;
};
