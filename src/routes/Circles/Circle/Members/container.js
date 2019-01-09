import React from 'react';
import Query from 'utils/graphql/query';
import query from './query.graphql';

export default (Component) => {
  const RenderComponent = ({ data: { circle } }) => <Component {...circle} />;
  return id => <Query query={query} variables={id} Component={RenderComponent} />;
};
