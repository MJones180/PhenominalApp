import React from 'react';
import { push } from 'utils/history';
import Mutation from 'utils/graphql/mutation';
import { set } from 'utils/storage';
import createAlert from 'components/Alert';
import mutation from './mutation.graphql';

export default Component => (
  ({ match }) => {
    Mutation({
      mutation,
      variables: {
        // Grab token from URL
        token: match.params.token,
      },
      success: ({ charitySignin: authToken }) => {
        // Store the authToken in a cookie
        set.charityAuth(authToken);
        createAlert().success('You are now signed in.');
        // Redirect to the charity dashboard
        push('/charities/admin');
      },
      error: () => {
        createAlert().error('Not signed in, token has either expired or been used.');
        // Redirect to the charity signin
        push('/charities/admin/signin');
      },
    });
    return <Component />;
  }
);
