import client from './client';

export default ({ mutation, variables, success, error }) => {
  client(mutation, variables)
    .then(({ data, errors }) => (
      data ? success(data) : error(errors)
    ));
};
