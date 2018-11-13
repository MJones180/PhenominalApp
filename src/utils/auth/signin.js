import gql from 'graphql-tag';
import mutation from 'utils/graphql/mutation';
import { push } from 'utils/history';
import { set } from 'utils/storage';
import { updateUser } from './user';
import grabUserData from './grabUserData';

export default (provider, token, newUser) => (
  mutation({
    mutation: gql`
      mutation($provider: String!, $token: String!) {
        signin(provider: $provider, token: $token) {
          authToken
          email
          id
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
      const { authToken, ...data } = signin;
      // Hide the legal notice if it is not already
      set.hideLegalNotice();
      // Set the auth cookie
      set.auth(authToken);
      // Email is only set if the user is new
      if (data.email) {
        // Update the state
        updateUser(data);
        // Return the new user's data
        newUser(data);
      } else {
        // Grab the current user's data and update the state if they are auth
        await grabUserData();
        // Reroute the user
        push('/profile');
      }
    },
  })
);
