import newHaloAlert from 'utils/newHaloAlert';
import { isAuth } from 'utils/auth/user';
import client from './client';

export default ({ mutation, variables, success, error }) => (
  client
    .mutate({ mutation, variables })
    .then(({ data }) => {
      // If the user is auth, check if any new Halos have been completed
      if (isAuth()) newHaloAlert();
      // Ensure success callback exists
      return success && success(data);
    })
    // Ensure error callback exists
    .catch(({ graphQLErrors }) => error && error(graphQLErrors))
);
