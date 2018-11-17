import React from 'react';
import styles from './index.css';

export default ({ value = 1 }) => (
  <div className={styles.boost}> {value}x </div>
);
