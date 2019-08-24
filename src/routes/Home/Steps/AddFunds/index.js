import React from 'react';
import { image } from 'utils/endpoints';
import Balance from './Balance';
import styles from './index.css';

export default () => (
  <div className={styles.container}>
    <img src={image('assets/Home/AddFundsMockup.png')} className={styles.mockup} alt="Add Funds Mockup" />
    <div className={styles.content}>
      <div className={styles.title}>
        <h2>1</h2>
        <h3 className="general">
          Add Funds
        </h3>
      </div>
      <h2 className={styles.balance}>
        <Balance />
      </h2>
      <p className={`large ${styles.text}`}>
        To donate, you must first add funds to your Phenominal account.
        All transactions are securely processed through Stripe.
      </p>
    </div>
  </div>
);
