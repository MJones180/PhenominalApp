import React from 'react';
import Balance from 'components/Balance2.0';
import Button from 'components/Button';
import styles from './index.css';

export default () => (
  <section className={styles.container}>
    <div className={styles.links}>
      <Button to="/transactions">
        Transactions
      </Button>
      <Button to="/settings" className={styles.settings}>
        Setings
      </Button>
    </div>
    <Balance />
  </section>
);
