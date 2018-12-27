import React from 'react';
import Query from 'utils/graphql/query';
import query from './query.graphql';

export default (Component) => {
  const RenderComponent = ({ data: { charity } }) => <Component {...charity} />;
  return ein => <Query query={query} variables={ein} Component={RenderComponent} />;
};
