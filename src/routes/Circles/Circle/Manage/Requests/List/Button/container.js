import React from 'react';
import Mutation from 'utils/graphql/mutation';
import { push } from 'utils/history';
import createAlert from 'components/Alert';
import mutation from './mutation.graphql';

export default Component => (
  ({ id, username, accept }) => {
    // Accept or deny the join request
    const handleRequest = async () => {
      const alert = createAlert(accept ? 'Accepting request.' : 'Denying request.');
      await Mutation({
        mutation,
        variables: {
          id,
          username,
          // Bool needed for mutation
          accept: accept || false,
        },
        success: () => {
          alert.success(accept ? 'Member joined.' : 'Request denied.');
          // Reload the page, simplest way to keep all of the data synced
          push();
        },
        error: () => {
          alert.error();
        },
      });
    };
    return <Component accept={accept} click={handleRequest} />;
  }
);
