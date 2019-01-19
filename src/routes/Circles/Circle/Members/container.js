import React from 'react';
import Query from 'utils/graphql/query';
import query from './query.graphql';

export default Component => ({ id, isOwner, ownerUsername }) => {
  const RenderComponent = ({ data: { circle } }) => <Component id={id} isOwner={isOwner} ownerUsername={ownerUsername} {...circle} />;
  return <Query query={query} variables={{ id }} Component={RenderComponent} />;
};
