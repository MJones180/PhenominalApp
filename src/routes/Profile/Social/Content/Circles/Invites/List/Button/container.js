import React from 'react';
import Mutation from 'utils/graphql/mutation';
import createAlert from 'components/Alert';
import mutation from './mutation.graphql';

export default Component => (
  ({ id, join, click }) => {
    // Join the Circle or decline the invite
    const handleRequest = async () => {
      // Remove row from list
      click(id);
      const alert = createAlert(join ? 'Joining Circle.' : 'Declining invite.');
      await Mutation({
        mutation,
        variables: {
          id,
          // Bool needed for mutation
          join: join || false,
        },
        success: () => {
          alert.success(join ? 'Joined Circle.' : 'Declined invite.');
        },
        error: () => {
          alert.error();
        },
      });
    };
    return <Component join={join} click={handleRequest} />;
  }
);
