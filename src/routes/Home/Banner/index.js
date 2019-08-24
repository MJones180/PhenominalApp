import React from 'react';
import Link from 'components/Link';
import { image } from 'utils/endpoints';
import styles from './index.css';

export default () => (
  <section className={styles.container}>
    <Link external="https://stripe.com/partners/phenominal">
      <img src={image('assets/StripePartner.png')} className={styles.stripe} alt="Stripe Verified Partner" />
    </Link>
    <h1 className={styles.title}>
      There is no limit
    </h1>
    <h2 className={styles.text}>
      Donating to charity has
      never been so fast, easy,
      and affordable.
    </h2>
  </section>
);
