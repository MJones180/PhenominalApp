import React from 'react';
import styles from './index.css';

export default ({ newPic }) => {
  const text = newPic ?
    'Slide spinner to zoom in and drag picture to center.' :
    'Click picture to upload, or drag and drop over picture.';
  return <h4 className={styles.container}> {text} </h4>;
};
