import React from 'react';
import { writtenDate } from 'utils/time';
import Query from 'utils/graphql/query';
import query from './query.graphql';

export default (Component) => {
  const RenderComponent = ({ data: { charity } }) => (
    <Component {...charity} updatedAt={writtenDate(charity.updatedAt)} />
  );
  return ein => <Query query={query} variables={ein} Component={RenderComponent} />;
};
