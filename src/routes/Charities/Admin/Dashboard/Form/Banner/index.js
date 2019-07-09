import React from 'react';
import _ from 'lodash';
import Dropzone from 'react-dropzone';
import { image } from 'utils/endpoints';
import Input from 'components/Input';
import styles from './index.css';

export default ({ banner, setFieldValue }) => (
  <div>
    <h4 className={styles.bottomTitle}>Banner</h4>
    <Dropzone accept="image/jpeg, image/png" multiple={false} onDrop={(file) => { setFieldValue('banner', file[0]); }}>
      {({ getRootProps, getInputProps, isDragActive }) => (
        <div {...getRootProps()} className={`${!false && styles.dropzone} ${isDragActive && styles.activeDropzone}`}>
          <input {...getInputProps()} />
          <img src={_.isString(banner) ? image(banner) : URL.createObjectURL(banner)} alt="Banner" className={styles.banner} />
          {!false && <p className={styles.uploadHover}> Upload </p>}
        </div>
      )}
    </Dropzone>
    <Input name="bannerCredit" label="Banner Credit" />
  </div>
);
