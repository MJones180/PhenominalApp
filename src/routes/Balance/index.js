import React from 'react';
import _ from 'lodash';
import Button from 'components/Button';
import HeadTags from './headTags';
import Container from './container';
import styles from './index.css';

export default Container(({ balance, expirations }) => (
  <main className={styles.container}>
    <HeadTags />
    <div className={styles.buttons}>
      <Button to="/add-funds" special>
        Add Funds
      </Button>
      <Button to="/transactions" className={styles.buttonMargin}>
        Transactions
      </Button>
    </div>
    <div className={styles.balance}>
      <h2>
        Account Balance
      </h2>
      <h1>
        {balance}
      </h1>
    </div>
    <div className={styles.expiration}>
      {_.map(expirations, ({ amount, days, expiration }, key) => (
        <h3 key={key}><span className={styles.sand}>{amount}</span> will expire in <span className={styles.azure}>{days}</span> days on <span className={styles.azure}>{expiration}</span>.</h3>
      ))}
    </div>
  </main>
));
