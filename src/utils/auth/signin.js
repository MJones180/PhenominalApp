import gql from 'graphql-tag';
import mutation from 'utils/graphql/mutation';
import { push } from 'utils/history';
import { set } from 'utils/storage';
import { updateUser } from './user';

export default (provider, token, newUser) => (
  mutation({
    mutation: gql`
      mutation($provider: String!, $token: String!) {
        signin(provider: $provider, token: $token) {
          authToken
          email
          id
          isNewUser
          nameFirst
          nameLast
          username
        }
      }
    `,
    variables: {
      provider,
      token,
    },
    success: async ({ signin }) => {
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
