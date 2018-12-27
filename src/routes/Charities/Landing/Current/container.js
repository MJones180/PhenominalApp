import React from 'react';
import Query from 'utils/graphql/query';
import query from './query.graphql';

export default (Component) => {
  const RenderComponent = ({ data: { eventsCurrent } }) => <Component data={eventsCurrent} />;
  return () => <Query query={query} Component={RenderComponent} />;
};
