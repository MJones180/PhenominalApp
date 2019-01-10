import React from 'react';
import { writtenDateFull } from 'utils/time';
import Query from 'utils/graphql/query';
import query from './query.graphql';

export default Component => (
  ({ id, isOwner }) => {
    const RenderComponent = ({ data: { circle } }) => (
      <Component
        {...circle}
        created={writtenDateFull(circle.createdAt)}
        id={id}
        isOwner={isOwner}
      />
    );
    return <Query query={query} variables={{ id }} Component={RenderComponent} />;
  }
);
