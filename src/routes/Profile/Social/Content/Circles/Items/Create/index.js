import React from 'react';
import Link from 'components/Link';
import styles from './index.css';

export default () => (
  <Link className={styles.link} to="/circles/create">
    <div className={styles.circle}>
      <h4 className={styles.text}>
        Create Circle
      </h4>
    </div>
  </Link>
);
