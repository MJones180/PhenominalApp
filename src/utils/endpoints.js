import cloudinaryCore from 'cloudinary-core';

const cloudinary = new cloudinaryCore.Cloudinary({ cloud_name: 'phenominal', secure: true });

export const graphqlBase = __DEV__ ? 'http://localhost:4000' : 'https://phenominal-production-server.herokuapp.com/';
export const image = (route, props = {}) => {
  const options = {};
  if (props.width) {
    options.width = props.width;
    options.crop = 'scale';
  }
  return cloudinary.url(route, options);
};
