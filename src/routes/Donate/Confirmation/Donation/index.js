import React from 'react';
import styles from './index.css';

export default ({ amount, balance, charityName }) => (
  <div className={styles.container}>
    <div className={styles.charity}>
      <h4 className={styles.label}>Charity</h4>
      <h3 className={styles.name}>{charityName}</h3>
    </div>
    <div className={styles.donation}>
      <div className={styles.box}>
        <h4 className={styles.label}>Amount</h4>
        <h2 className={styles.currency}>{amount}</h2>
      </div>
      <div className={styles.box}>
        <h4 className={styles.label}>Balance</h4>
        <h2 className={styles.currency}>{balance}</h2>
      </div>
    </div>
  </div>
);
