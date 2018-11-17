import React from 'react';
import Loops from './Loops';
import Name from './Name';
import styles from './index.css';

export default ({ first, last, username, loops, dots }) => (
  <div className={styles.container}>
    <Name fullName={`${first} ${last}`} username={username} />
    <div className={styles.stats}>
      <Loops count={loops} />
      <p className={`large ${styles.dots}`}> {dots} • </p>
    </div>
  </div>
);
