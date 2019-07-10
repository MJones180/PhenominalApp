import React from 'react';
import { image } from 'utils/endpoints';
import _ from 'lodash';

export default Component => (
  ({ field, image: imageSRC, setFieldValue }) => {
    // Update the state with the new image
    const onDrop = file => setFieldValue(field, file[0]);
    // Load the image from a url or from an upload File using `URL.createObjectURL`
    const src = _.isString(imageSRC) ? image(imageSRC) : URL.createObjectURL(imageSRC);
    return <Component field={field} onDrop={onDrop} src={src} />;
  }
);
