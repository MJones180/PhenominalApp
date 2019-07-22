import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createUploadLink } from 'apollo-upload-client';
import { setContext } from 'apollo-link-context';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import _ from 'lodash';
import { graphqlEndpoint } from 'utils/endpoints';
import { get } from 'utils/storage';
import errorHandling from './errorHandling';

// Client's cache (required)
const cache = new InMemoryCache();

// Policies attached to every query/mutation
// No caching and pass all errors
const defaultOptions = {
  watchQuery: {
    errorPolicy: 'all',
    fetchPolicy: 'no-cache',
  },
  query: {
    errorPolicy: 'all',
    fetchPolicy: 'no-cache',
  },
  mutation: {
    errorPolicy: 'all',
    fetchPolicy: 'no-cache',
  },
};

// Graphql endpoint, createUploadLink to support file uploads
const httpLink = createUploadLink({
  uri: graphqlEndpoint,
});

// Auth header
const authLink = setContext((req, { headers }) => {
  // Get the authToken
  const token = get.auth();
  // Return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// Handle errors
const error = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    // Loop through each of the errors
    _.each(graphQLErrors, ({ extensions, message, name }) => {
      // Handle the error if necessary (non application specific)
      const topLevelError = errorHandling[name];
      if (topLevelError) topLevelError();
      // Log the error
      console.log(`[GraphQL Error]: (${name || ''}) ${message}`);
      // Log the stacktrace in dev if it exists
      const stacktrace = _.get(extensions, 'exception.stacktrace');
      if (stacktrace && __DEV__) console.log(stacktrace);
    });
  }
  if (networkError) console.log(`[Network Error]: ${networkError}`);
});

// Build the complete link chain
const link = ApolloLink.from([
  // Handle the errors
  error,
  // Attach the auth header to the request
  authLink.concat(httpLink),
]);

// Create the client
export default new ApolloClient({
  cache,
  defaultOptions,
  link,
});
