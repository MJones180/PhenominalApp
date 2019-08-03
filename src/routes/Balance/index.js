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
      <div className={styles.addFunds}>
        <h4>Low Balance?</h4>
        <Button to="/add-funds" special className={styles.button}>
          Add Funds
        </Button>
      </div>
      <div className={styles.transactions}>
        <h4>View history</h4>
        <Button to="/transactions" className={styles.button}>
          Transactions
        </Button>
      </div>
    </div>
    <div className={styles.balance}>
      <div>
        <h3>
          Balance
        </h3>
        <h1>
          {balance}
        </h1>
      </div>
    </div>
    <div className={styles.expiration}>
      {_.map(expirations, ({ amount, days, expiration }, key) => (
        <h3 key={key}><span className={styles.sand}>{amount}</span> will expire in <span className={styles.azure}>{days}</span> days on <span className={styles.azure}>{expiration}</span>.</h3>
      ))}
    </div>
  </main>
));
