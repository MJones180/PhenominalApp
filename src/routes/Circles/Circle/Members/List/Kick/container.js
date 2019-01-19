import React from 'react';
import Mutation from 'utils/graphql/mutation';
import { push } from 'utils/history';
import createAlert from 'components/Alert';
import mutation from './mutation.graphql';

export default Component => (
  ({ id, username, owner }) => {
    // Kick the user from the Circle
    const kick = async () => {
      const alert = createAlert('Kicking member.');
      await Mutation({
        mutation,
        variables: {
          id,
          username,
        },
        success: () => {
          alert.success('Member kicked.');
          // Reload the page, simplest way to keep all of the data synced
          push();
        },
        error: () => {
          alert.error();
        },
      });
    };
    return <Component kick={kick} isOwner={username == owner} />;
  }
);
