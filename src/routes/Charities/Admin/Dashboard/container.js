import React from 'react';
import { get } from 'utils/storage';
import Query from 'utils/graphql/query';
import query from './query.graphql';

export default Component => (
  () => {
    const RenderComponent = ({ data: { currentAuthCharity } }) => <Component ein={currentAuthCharity} />;
    return Query({
      query,
      variables: {
        token: get.charityAuth(),
      },
      Component: RenderComponent,
    });
  }
);
