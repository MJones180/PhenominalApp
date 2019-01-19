import React from 'react';
import Query from 'utils/graphql/query';
import query from './query.graphql';

export default Component => ({ id, isOwner }) => {
  const RenderComponent = ({ data: { circle } }) => <Component id={id} isOwner={isOwner} {...circle} />;
  return <Query query={query} variables={{ id }} Component={RenderComponent} />;
};
