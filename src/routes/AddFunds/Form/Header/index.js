import React from 'react';
import Balance from 'components/Balance';
import styles from './index.css';

export default () => (
  <div className={styles.header}>
    <h3 className={`general ${styles.title}`}>
      Add Funds
    </h3>
    <Balance noAddFunds />
  </div>
);
