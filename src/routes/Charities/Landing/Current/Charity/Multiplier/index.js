import React from 'react';
import styles from './index.css';

export default ({ multiplier, name, website }) => (
  !multiplier ? false : (
    <div className={styles.tag}>
      <span className={styles.multiplier}>
        {multiplier}x
      </span>
      {' Multiplier - '}
      <a className={styles.sponsor} href={website} target="_blank" rel="noopener noreferrer">
        {name}
      </a>
    </div>
  )
);
