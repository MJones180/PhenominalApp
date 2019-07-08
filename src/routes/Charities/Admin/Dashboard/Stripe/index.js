import React from 'react';
import Button from 'components/Button';
import styles from './index.css';

export default () => (
  <section className={styles.container}>
    <div className={styles.stripeBox}>
      <h4 className={styles.stripeTitle}>Stripe Account</h4>
      <div className={styles.stripeNotConnected}>
        <p className="large">Your Stripe account is where all donations will be payed out to.</p>
        <Button className={styles.stripe} onClick={() => {}}>
        Connect Account
        </Button>
      </div>
      <div className={styles.stripeConnected}>
        <h4> Connected </h4>
      </div>
    </div>
  </section>
);
