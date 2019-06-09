import React from 'react';
import Link from 'components/Link';
import styles from './index.css';

export default ({ expiration }) => (
  <h4 className={styles.expiration}>
    The funds just added must be donated by <span>{expiration}</span> (80 days).
    {' '}
    <Link to="/help" className={`${styles.link} general`}>Learn More.</Link>
  </h4>
);
