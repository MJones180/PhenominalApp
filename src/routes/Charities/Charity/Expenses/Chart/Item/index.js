import React from 'react';
import styles from './index.css';

export default ({ className, name, value }) => (
  <li className={styles.container}>
    <p className={`large ${className} ${styles.name}`}>
      { name }
    </p>
    <p className={styles.value}>
      { value }%
    </p>
  </li>
);
