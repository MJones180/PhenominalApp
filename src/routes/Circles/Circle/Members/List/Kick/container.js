import React from 'react';
import Mutation from 'utils/graphql/mutation';
import createAlert from 'components/Alert';
import mutation from './mutation.graphql';

export default Component => (
  (id, username, owner) => {
    const mutate = async () => {
      const alert = createAlert('Kicking member.');
      await Mutation({
        mutation,
        variables: {
          id,
          username,
        },
        success: () => {
          alert.success('Member kicked.');
        },
        error: () => {
          alert.error();
        },
      });
    };
    return <Component kick={mutate} isOwner={username == owner} />;
  }
);
