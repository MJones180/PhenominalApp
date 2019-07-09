import React from 'react';
import _ from 'lodash';
import Dropzone from 'react-dropzone';
import { image } from 'utils/endpoints';
import styles from './index.css';

export default ({ logo, setFieldValue }) => (
  <div>
    <h4 className={styles.bottomTitle}>Logo</h4>
    <Dropzone accept="image/jpeg, image/png" multiple={false} onDrop={(file) => { setFieldValue('logo', file[0]); }}>
      {({ getRootProps, getInputProps, isDragActive }) => (
        <div {...getRootProps()} className={`${!false && styles.dropzone} ${isDragActive && styles.activeDropzone}`}>
          <input {...getInputProps()} />
          <img src={_.isString(logo) ? image(logo) : URL.createObjectURL(logo)} alt="Logo" className={styles.logo} />
          {!false && <p className={styles.uploadHover}> Upload </p>}
        </div>
      )}
    </Dropzone>
  </div>
);
