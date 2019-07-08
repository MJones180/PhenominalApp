import React from 'react';
import Dropzone from 'react-dropzone';
import { image } from 'utils/endpoints';
import styles from './index.css';

export default ({ ein, logo }) => (
  <div>
    <h4 className={styles.bottomTitle}>Logo</h4>
    <Dropzone accept="image/jpeg, image/png" multiple={false}>
      {({ getRootProps, getInputProps, isDragActive }) => (
        <div {...getRootProps()} className={`${!false && styles.dropzone} ${isDragActive && styles.activeDropzone}`}>
          <input {...getInputProps()} />
          <img src={image(logo)} alt={ein} className={styles.logo} />
          {!false && <p className={styles.uploadHover}> Upload </p>}
        </div>
      )}
    </Dropzone>
  </div>
);
