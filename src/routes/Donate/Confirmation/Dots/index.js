import React from 'react';
import Dots from 'components/Dots';
import styles from './index.css';

export default ({ dotTotal, dotsGained }) => (
  <div className={styles.container}>
    <h4 className={styles.text}>You gained more Dots</h4>
    <Dots total={dotTotal} gained={dotsGained} />
  </div>
);
