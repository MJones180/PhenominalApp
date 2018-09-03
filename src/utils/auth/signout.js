import { push } from 'utils/history';
import { remove } from 'utils/storage';
import { removeUser } from './user';

export default () => {
  // Delete the auth cookie
  remove.auth();
  // Clear the local state
  removeUser();
  // Reroute the user
  push('/');
};
