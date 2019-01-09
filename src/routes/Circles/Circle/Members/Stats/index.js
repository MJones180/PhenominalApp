import React from 'react';
import Container from './container';
import styles from './index.css';

export default Container(({ memberCount, dotTotal, dotAverage }) => (
  <div className={styles.container}>
    <div className={styles.stat}>
      <h4> {memberCount} </h4>
      <p> Members </p>
    </div>
    <div className={styles.stat}>
      <h4> {dotTotal} </h4>
      <p> Total Dots </p>
    </div>
    <div className={styles.stat}>
      <h4> {dotAverage} </h4>
      <p> Dot Average </p>
    </div>
  </div>
));
