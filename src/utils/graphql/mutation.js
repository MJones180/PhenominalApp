import client from './client';

export default ({ mutation, variables, success, error }) => (
  client
    .mutate({ mutation, variables })
    // Ensure success callback exists
    .then(({ data }) => success && success(data))
    // Ensure error callback exists
    .catch(({ graphQLErrors }) => error && error(graphQLErrors))
);
