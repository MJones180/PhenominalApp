import React from 'react';
import Dropzone from 'react-dropzone';
import Container from './container';
import styles from './index.css';

export default Container(({ field, onDrop, src }) => (
  <Dropzone accept="image/jpeg, image/png" multiple={false} onDrop={onDrop}>
    {({ getRootProps, getInputProps, isDragActive }) => (
      <div {...getRootProps()} className={`${styles.dropzone} ${isDragActive && styles.active}`}>
        <input {...getInputProps()} />
        <img src={src} alt={field} className={styles.image} />
        <p className={styles.hover}> Upload </p>
      </div>
    )}
  </Dropzone>
));
