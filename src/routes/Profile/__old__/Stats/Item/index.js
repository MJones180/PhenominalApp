import React from 'react';
import styles from './index.css';

export default ({ title, value }) => (
  <div className={styles.item}>
    <h3 className={styles.value}>
      { value }
    </h3>
    <span> { title } </span>
  </div>
);
