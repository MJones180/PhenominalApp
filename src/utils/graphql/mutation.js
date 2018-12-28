import client from './client';

export default ({ mutation, variables, success, error }) => {
  client
    .mutate({ mutation, variables })
    .then(({ data }) => success(data))
    .catch(({ graphQLErrors }) => error(graphQLErrors));
};
