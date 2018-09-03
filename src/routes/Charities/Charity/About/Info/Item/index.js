import React from 'react';
import styles from './index.css';

export default ({ children, title }) => (
  <div className={styles.box}>
    <h5 className={styles.title}>
      {title}:
    </h5>
    <p className={`large ${styles.content}`}>
      {children}
    </p>
  </div>
);
