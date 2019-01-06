import React from 'react';
import { Link } from 'react-router-dom';
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
