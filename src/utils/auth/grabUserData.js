import gql from 'graphql-tag';
import { simple } from 'utils/graphql/query';
import { get, remove } from 'utils/storage';
import { updateUser } from './user';

// Grab the user's data
const grabData = () => (
  // Make sure an auth token exists
  get.auth() && simple({
    query: gql`
      query {
        currentUser {
          email
          id
          nameFirst
          nameLast
        }
      }
    `,
  }).then(({ data }) => data)
);

export default async () => {
  const user = await grabData();
  // If a user was returned update the user state
  // Otherwise delete the auth storage because it is corrupted
  if (user) updateUser(user.currentUser);
  else remove.auth();
};
