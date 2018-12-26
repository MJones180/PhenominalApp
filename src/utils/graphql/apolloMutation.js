import client from './apolloClient';

export default ({ mutation, variables, success, error }) => {
  client
    .mutate({ mutation, variables })
    .then(({ data, error: errors }) => (
      data ? success(data) : error(errors)
    ));
};
