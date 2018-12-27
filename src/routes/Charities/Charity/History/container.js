import React from 'react';
import Query from 'utils/graphql/query';
import query from './query.graphql';

export default (Component) => {
  const RenderComponent = ({ data: { eventsPast } }) => <Component {...eventsPast} />;
  return ein => <Query query={query} variables={ein} Component={RenderComponent} />;
};
