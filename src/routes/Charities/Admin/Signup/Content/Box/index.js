import React from 'react';
import styles from './index.css';

export default ({ children, large, title }) => (
  <div className={`${styles.box} ${large ? styles.largeSize : styles.normalSize}`}>
    <h3 className={styles.header}>
      {title}
    </h3>
    {children}
  </div>
);
