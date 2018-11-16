import React from 'react';
import styles from './index.css';

export default ({ fullName, username }) => (
  <div className={styles.container}>
    <h3> {fullName} </h3>
    <h5> @ {username} </h5>
  </div>
);
