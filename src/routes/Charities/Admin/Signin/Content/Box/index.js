import React from 'react';
import styles from './index.css';

export default ({ children, title }) => (
  <div className={styles.box}>
    <h3 className={styles.header}>
      {title}
    </h3>
    {children}
  </div>
);
