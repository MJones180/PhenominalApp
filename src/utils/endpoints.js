import cloudinaryCore from 'cloudinary-core';

const cloudinary = new cloudinaryCore.Cloudinary({ cloud_name: 'phenominal', secure: true });

// Graphql endpoint
export const graphqlEndpoint = __DEV__ ? 'http://localhost:4000' : 'https://phenominal-production-server.herokuapp.com/';

export const image = (route, props = {}) => {
  const options = {};
  if (props.width) {
    options.crop = 'scale';
    options.width = props.width;
  }
  return cloudinary.url(route, options);
};

// Image stored in AWS S3
export const imageS3 = route => `https://picture-assets.s3.amazonaws.com/${route}`;
