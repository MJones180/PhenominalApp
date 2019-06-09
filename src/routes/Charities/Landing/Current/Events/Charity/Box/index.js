import React from 'react';
import styles from './index.css';

export default ({ children, title }) => (
  <div className={styles.box}>
    <h5 className={styles.subTitle}>
      {title}
    </h5>
    {children}
  </div>
);
