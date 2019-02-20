import React from 'react';
import Link from 'components/Link';
import styles from './index.css';

export default ({ multiplier, name, website }) => (
  !multiplier ? false : (
    <div className={styles.tag}>
      <span className={styles.multiplier}>
        {multiplier}x
      </span>
      {' Multiplier - '}
      <Link className={styles.sponsor} external={website}>
        {name}
      </Link>
    </div>
  )
);
