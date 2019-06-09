import React from 'react';
import styles from './index.css';

export default ({ title, val }) => (
  <p className={styles.stat}>
    {val}
    <span>{title}</span>
  </p>
);
