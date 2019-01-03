import React from 'react';
import styles from './index.css';

export default ({ value }) => (
  <div className={styles.boost}> {value || 1}x </div>
);
