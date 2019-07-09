import React from 'react';
import { image } from 'utils/endpoints';
import styles from './index.css';

export default ({ banner, name }) => (
  <img
    src={image(banner)}
    alt={name}
    className={styles.banner}
  />
);
