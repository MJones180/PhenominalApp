import React from 'react';
import styles from './index.css';

export default ({ info, value }) => (
  <li className={styles.bullet}>
    <h5>
      {info}: <span>{value}</span>
    </h5>
  </li>
);
