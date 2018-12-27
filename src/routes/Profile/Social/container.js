import React from 'react';
import _ from 'lodash';
import Query from 'utils/graphql/query';
import query from './query.graphql';

export default (Component) => {
  const RenderComponent = ({ data: { user: { circles, followedCharities } } }) => (
    <Component
      circles={circles}
      circlesCount={circles.length}
      followedCharities={_.map(followedCharities, ({ ein, name }) => ({ name, id: ein }))}
      followedCharitiesCount={followedCharities.length}
    />
  );
  return username => <Query query={query} variables={username} Component={RenderComponent} />;
};
