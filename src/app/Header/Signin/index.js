import React from 'react';
import Link from 'components/Link';
import styles from './index.css';

export default () => (
  <Link to="/signin" className={styles.signin}>
    Sign In
  </Link>
);
