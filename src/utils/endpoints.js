// Graphql endpoint
export const graphqlEndpoint = __DEV__ ? 'http://localhost:4000' : 'https://server.phenominal.fund';

// Image stored in AWS S3
export const image = route => `https://picture-assets.s3.amazonaws.com/${route}`;
