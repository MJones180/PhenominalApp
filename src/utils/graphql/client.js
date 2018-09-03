import { GraphQLClient } from 'graphql-request';
import _ from 'lodash';
import { graphqlBase } from 'utils/endpoints';
import { get } from 'utils/storage';
import errorHandling from './errorHandling';

export default (str, vars) => {
  // Request headers
  const headers = {};

  // Attach the Authorization token if one exists
  const token = get.auth();
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  // The request client
  // Must be reinitialized every time so the most recent auth cookie is grabbed
  const client = new GraphQLClient(graphqlBase, { headers });

  // Make the request
  return client.request(str, vars)
    .then(data => ({ data }))
    .catch(({ response }) => {
      const { errors } = response;
      const errorCode = errors[0].name;
      // Handle the error if necessary
      const handler = errorHandling[errorCode];
      if (handler) handler();
      // Only in dev mode
      if (__DEV__) {
        // Log each error
        _.forEach(errors, error => console.log('GraphQL Error: ', error));
      }
      return { errors };
    });
};
