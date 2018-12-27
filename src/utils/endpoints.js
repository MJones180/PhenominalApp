// Graphql endpoint
export const graphqlEndpoint = __DEV__ ? 'http://localhost:4000' : 'https://phenominal-production-server.herokuapp.com/';

// Image stored in AWS S3
export const image = route => `https://picture-assets.s3.amazonaws.com/${route}`;
