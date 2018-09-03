import React from 'react';
import styles from './index.css';

export default ({ inline, text }) => (
  <div className={inline ? '' : styles.container}>
    <div className={`${styles.text} ${inline && styles.inline}`}>
      { text || 'Loading'}
      <div className={styles.spinner} />
    </div>
  </div>
);
