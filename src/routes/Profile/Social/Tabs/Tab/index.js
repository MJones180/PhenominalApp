import React from 'react';
import styles from './index.css';

export default ({ active, name, onClick }) => (
  <div className={`${styles.tab} ${active && styles.active}`} onClick={onClick}>
    <h4 className={styles.text}>
      {name}
    </h4>
  </div>
);
