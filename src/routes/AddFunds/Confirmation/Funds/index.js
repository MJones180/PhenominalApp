import React from 'react';
import styles from './index.css';

export default ({ amountCharged, amountReceived, balance }) => (
  <div className={styles.container}>
    <div className={styles.added}>
      <div className={styles.box}>
        <h2 className={styles.value}>{amountCharged}</h2>
        <h4 className={styles.label}>Charged</h4>
      </div>
      <div className={styles.box}>
        <h2 className={styles.value}>{amountReceived}</h2>
        <h4 className={styles.label}>Received</h4>
      </div>
    </div>
    <div className={styles.balance}>
      <h3 className={styles.label}>New Balance</h3>
      <h1 className={styles.value}>{balance}</h1>
    </div>
  </div>
);
