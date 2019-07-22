// Graphql endpoint
export const graphqlEndpoint = __DEV__ ? 'http://localhost:4000/graphql' : 'https://server.phenominal.fund/graphql';

// Image stored in AWS S3
export const image = route => `https://picture-assets.s3.amazonaws.com/${route}`;

// URL of current website
export const websiteURL = __DEV__ ? 'https://localhost:3000' : 'https://phenominal.fund';
