import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { createUploadLink } from 'apollo-upload-client';
import { setContext } from 'apollo-link-context';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import { graphqlBase } from 'utils/endpoints';
import { get } from 'utils/storage';

// const httpLink = createHttpLink({
//   uri: graphqlBase,
// });

const httpLink = createUploadLink({
  uri: graphqlBase,
});

const authLink = setContext((_, { headers }) => {
  console.log('Grabbed token: ', get.auth());
  // Request headers
  const newHeaders = {};
  // Attach the Authorization token if one exists
  const token = get.auth();
  if (token) {
    newHeaders.Authorization = `Bearer ${token}`;
  }
  return {
    headers: {
      ...headers,
      ...newHeaders,
    },
  };
  // get the authentication token from local storage if it exists
  // const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  // return {
  //   headers: {
  //     ...headers,
  //     authorization: token ? `Bearer ${token}` : '',
  //   },
  // };
});

export default new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        graphQLErrors.map(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
          )
        );
      }
      if (networkError) console.log(`[Network error]: ${networkError}`);
    }),
    authLink.concat(httpLink),
  ]),
  cache: new InMemoryCache(),
});
