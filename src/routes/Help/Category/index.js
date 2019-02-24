import React from 'react';
import styles from './index.css';

export default ({ children, title }) => (
  <div>
    <h4 className={styles.title}> {title} </h4>
    {children}
  </div>
);
