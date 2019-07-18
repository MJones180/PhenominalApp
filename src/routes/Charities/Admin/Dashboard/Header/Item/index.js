import React from 'react';
import styles from './index.css';

export default ({ label, children }) => (
  <h4>
    <span className={styles.label}>{label}:</span> {children}
  </h4>
);
