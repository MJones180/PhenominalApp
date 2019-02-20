import React from 'react';
import styles from './index.css';

export default ({ children, title }) => (
  <div className={styles.category}>
    <h4 className={styles.title}> {title} </h4>
    <div>
      {children}
    </div>
  </div>
);
