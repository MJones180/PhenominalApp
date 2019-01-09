import React from 'react';
import { writtenDateFull } from 'utils/time';
import Query from 'utils/graphql/query';
import query from './query.graphql';

export default (Component) => {
  const RenderComponent = ({ data: { circle } }) => (
    <Component
      {...circle}
      created={writtenDateFull(circle.createdAt)}
    />
  );
  return id => <Query query={query} variables={id} Component={RenderComponent} />;
};
