import React from 'react';
import Query from 'utils/graphql/query';
import query from './query.graphql';

export default (Component) => {
  const RenderComponent = ({ data: { circle: { members } } }) => <Component members={members} count={members.length} />;
  return id => <Query query={query} variables={id} Component={RenderComponent} />;
};
