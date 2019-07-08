import React from 'react';
import Dropzone from 'react-dropzone';
import { image } from 'utils/endpoints';
import Input from 'components/Input';
import styles from './index.css';

export default ({ banner, ein }) => (
  <div>
    <h4 className={styles.bottomTitle}>Banner</h4>
    <Dropzone accept="image/jpeg, image/png" multiple={false}>
      {({ getRootProps, getInputProps, isDragActive }) => (
        <div {...getRootProps()} className={`${!false && styles.dropzone} ${isDragActive && styles.activeDropzone}`}>
          <input {...getInputProps()} />
          <img src={image(banner)} alt={ein} className={styles.banner} />
          {!false && <p className={styles.uploadHover}> Upload </p>}
        </div>
      )}
    </Dropzone>
    <Input name="bannerCredit" label="Banner Credit" />
  </div>
);
