import React from 'react';
import queryString from 'query-string';
import { push } from 'utils/history';
import Mutation from 'utils/graphql/mutation';
import { get } from 'utils/storage';
import createAlert from 'components/Alert';
import mutation from './mutation.graphql';

export default Component => (
  ({ location }) => {
    // Query params passed back from Stripe
    const { code, state } = queryString.parse(location.search);
    // The authCharity token from the browser cookies
    const token = get.charityAuth();
    // Ensure all three values exist
    if (token && code && state) {
      Mutation({
        mutation,
        variables: {
          code,
          state,
          token,
        },
        success: () => {
          createAlert().success('Stripe account connected.');
          push('/charities/admin');
        },
        error: () => {
          createAlert().error('Stripe account not connected, something went wrong.');
          push('/charities/admin');
        },
      });
    }
    return <Component />;
  }
);
