import React from 'react';
import { compactDate } from 'utils/time';
import Query from 'utils/graphql/query';
import query from './query.graphql';

export default (Component) => {
  const RenderComponent = ({ data: { charity } }) => (
    <Component
      {...charity}
      createdAt={compactDate(charity.createdAt)}
      updatedAt={compactDate(charity.updatedAt)}
    />
  );
  return ein => <Query query={query} variables={ein} Component={RenderComponent} />;
};
