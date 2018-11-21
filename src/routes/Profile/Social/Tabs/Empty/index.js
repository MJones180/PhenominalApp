import React from 'react';
import styles from './index.css';

export default ({ label }) => (
  <div className={styles.container}>
    <h4> User has no {label} </h4>
  </div>
);
