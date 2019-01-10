import React from 'react';
import Query from 'utils/graphql/query';
import query from './query.graphql';

export default Component => ({ id }) => {
  const RenderComponent = ({ data: { circle } }) => <Component {...circle} id={id} />;
  return <Query query={query} variables={{ id }} Component={RenderComponent} />;
};
