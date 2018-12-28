import Mutation from 'utils/graphql/mutation';
import { push } from 'utils/history';
import { set } from 'utils/storage';
import { updateUser } from '../user';
import mutation from './mutation.graphql';

export default (provider, token, newUser) => (
  Mutation({
    mutation,
    variables: {
      provider,
      token,
    },
    success: ({ signin }) => {
      const { authToken, isNewUser, ...data } = signin;
      // Hide the legal notice if it is not already
      set.hideLegalNotice();
      // Set the auth cookie
      set.auth(authToken);
      // Update the state
      updateUser(data);
      // If the user is new, return their data for verification
      if (isNewUser) newUser(data);
      // Reroute the user
      else push('/profile');
    },
  })
);
