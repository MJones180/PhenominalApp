import React from 'react';
import Balance from 'components/Balance2.0';
import Button from 'components/Button';
import styles from './index.css';

export default () => (
  <section className={styles.container}>
    <Button to="/transactions" className={styles.transactions}>
      Transactions
    </Button>
    <Button to="/settings" className={styles.settings}>
      Setings
    </Button>
    <Balance />
  </section>
);
