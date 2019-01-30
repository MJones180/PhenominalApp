import React from 'react';
import _ from 'lodash';
import Query from 'utils/graphql/query';
import query from './query.graphql';

export default (Component) => {
  const RenderComponent = ({ data }) => {
    const { feed } = data.user;
    // Dedupe the Feed for consecutive items
    const dedupeFeed = _.reject(feed, ({ message }, index) => (
      index > 0 && feed[index - 1].message == message
    ));
    return <Component feed={dedupeFeed} />;
  };
  return username => <Query query={query} variables={username} Component={RenderComponent} />;
};
