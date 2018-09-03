import React from 'react';
import styles from './index.css';

export default ({ value }) => (
  <div className={styles.percentage}>
    <p>{value}</p>
    <div>
      <span style={{ width: value }} />
    </div>
  </div>
);
