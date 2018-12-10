// ====================================
// This file contains top level errors
// that are not application specific
// ====================================

import { push } from 'utils/history';
import { remove } from 'utils/storage';
import { removeUser } from 'utils/auth/user';

const unauthUser = () => {
  // Delete the auth cookie
  remove.auth();
  // Clear the local state
  removeUser();
  // Redirect the user to signin
  push('/signin');
};

export default {
  CorruptAuthToken: unauthUser,
  InvalidUser: unauthUser,
  NotAuthenticated: unauthUser,
};
