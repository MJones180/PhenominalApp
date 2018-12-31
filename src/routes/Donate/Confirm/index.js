import React from 'react';
import Balance from 'components/Balance';
import Button from 'components/Button';
import Loops from 'components/Loops';
import Dots from 'components/Dots';
import HeadTags from './headTags';
import Transactions from './Transactions';
import styles from './index.css';

export default ({ amount, dotTotal, dotsGained, loopCount, loopsGained, transactions }) => (
  <section className={styles.container}>
    <HeadTags />
    <div className={styles.header}>
      <h3 className={`general ${styles.title}`}>
        Confirmation
      </h3>
      <Balance />
    </div>
    <Transactions amount={amount} transactions={transactions} />
    <div className={styles.footer}>
      <div className={styles.stats}>
        <Loops className={styles.loops} count={loopCount} gained={loopsGained} />
        <Dots total={dotTotal} gained={dotsGained} />
      </div>
      <Button to="/charities">
        Back to charities
      </Button>
    </div>
  </section>
);
