import React from 'react';
import Dots from 'components/Dots';
import Loops from 'components/Loops';
import Name from './Name';
import styles from './index.css';

export default ({ first, last, username, loopCount, dots }) => (
  <div className={styles.container}>
    <Name fullName={`${first} ${last}`} username={username} />
    <div className={styles.stats}>
      <Loops count={loopCount} className={styles.loops} />
      <Dots total={dots} />
    </div>
  </div>
);
