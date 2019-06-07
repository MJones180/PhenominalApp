import React from 'react';
import Loops from 'components/Loops';
import styles from './index.css';

export default ({ loopCount, loopGained }) => (
  <div className={styles.container}>
    <h4 className={styles.text}>You gained a new Loop</h4>
    <Loops count={loopCount} gained={loopGained} />
  </div>
);
