import React from 'react';
import Mutation from 'utils/graphql/mutation';
import createAlert from 'components/Alert';
import mutation from './mutation.graphql';

export default Component => (
  ({ id, username }) => {
    // Invite the user
    const invite = async () => {
      const alert = createAlert('Inviting user.');
      await Mutation({
        mutation,
        variables: {
          id,
          username,
        },
        success: () => {
          alert.success('User invited.');
        },
        error: () => {
          alert.error();
        },
      });
    };
    return <Component invite={invite} />;
  }
);
