import React from 'react';
import styles from './index.css';

export default ({ message }) => (
  <div className={styles.error}>
    { message }
  </div>
);
