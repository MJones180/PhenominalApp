import React from 'react';
import styles from './index.css';

export default () => (
  <section className={styles.container}>
    <h4 className="general">
      How it works.
    </h4>
    <p>
      To make a donation you must first create an account.
      Once an account is created you add funds as desired – this processes is facilitated by Stripe and they charge a fee of 2.9% + 30¢.
      Once you have funds in your account you are free to donate however much you like, Phenominal takes no portion of your donation.
      Phenominal makes no revenue and was created solely to help charities.
    </p>
  </section>
);
