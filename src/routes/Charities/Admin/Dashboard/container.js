import React from 'react';
import { push } from 'utils/history';
import { get } from 'utils/storage';
import Query from 'utils/graphql/query';
import query from './query.graphql';

export default Component => (
  () => {
    // The authCharity token from the browser cookies
    const token = get.charityAuth();
    // Ensure token exists in storage
    if (token) {
      const RenderComponent = ({ data: { currentAuthCharity } }) => <Component ein={currentAuthCharity} />;
      // Grab the authCharity EIN
      return Query({
        query,
        variables: {
          token,
        },
        Component: RenderComponent,
      });
    }
    // Redirect to signin
    push('/charities/admin/signin');
    return false;
  }
);
