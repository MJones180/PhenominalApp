import React from 'react';
import Mutation from 'utils/graphql/mutation';
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
          accept,
        },
        success: () => {
          alert.success(accept ? 'Member joined.' : 'Request denied.');
        },
        error: () => {
          alert.error();
        },
      });
    };
    return <Component accept={accept} click={handleRequest} />;
  }
);
