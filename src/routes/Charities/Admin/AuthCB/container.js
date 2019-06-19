import React from 'react';
import { push } from 'utils/history';
import Mutation from 'utils/graphql/mutation';
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
      success: ({ charitySignin: token }) => {
        console.log('token: ', token);
        createAlert().success('You are now signed in.');
        // Redirect to the charity dashboard
        push('/charities/admin');
      },
      error: () => {
        createAlert().error('Something went wrong.');
        // Redirect to the charity signin
        push('/charities/admin/signin');
      },
    });
    return <Component />;
  }
);
