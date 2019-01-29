import newHaloAlert from 'utils/newHaloAlert';
import client from './client';

export default ({ mutation, variables, success, error }) => (
  client
    .mutate({ mutation, variables })
    .then(({ data }) => {
      // Check if any new Halos have been completed
      newHaloAlert();
      // Ensure success callback exists
      return success && success(data);
    })
    // Ensure error callback exists
    .catch(({ graphQLErrors }) => error && error(graphQLErrors))
);
