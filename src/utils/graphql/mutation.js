import client from './client';

export default ({ mutation, variables, success, error }) => {
  client
    .mutate({ mutation, variables })
    .then(({ data, errors }) => (
      data ? success(data) : error(errors ? errors[0] : undefined)
    ));
};
