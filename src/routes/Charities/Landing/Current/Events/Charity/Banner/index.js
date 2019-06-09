import React from 'react';
import { image } from 'utils/endpoints';
import styles from './index.css';

export default ({ ein, name }) => (
  <img
    src={image(`charities/banners/${ein}.jpg`)}
    alt={name}
    className={styles.banner}
  />
);
