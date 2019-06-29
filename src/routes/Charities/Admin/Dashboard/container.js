import React from 'react';
import { push } from 'utils/history';
import { get } from 'utils/storage';
import Query from 'utils/graphql/query';
import query from './query.graphql';

export default Component => (
  () => {
    const ein = get.charityAuth();
    if (!ein) {
      push('/charities/admin/signin');
      return false;
    }
    const RenderComponent = ({ data: { currentAuthCharity } }) => <Component ein={currentAuthCharity} />;
    return Query({
      query,
      variables: {
        token: ein,
      },
      Component: RenderComponent,
    });
  }
);
