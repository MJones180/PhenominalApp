import React from 'react';
import Button from 'components/Button';
import Container from './container';
import styles from './index.css';

export default Container(({ connected, disabled, onClick }) => (
  <section className={styles.container}>
    <h4 className={styles.title}>Stripe Account</h4>
    <p className="large">
      { connected ?
        'You are connected. Click below to edit Stripe account and view payouts.' :
        'We use Stripe to make sure the fundraising proceeds are paid out on time and your payout information is secure.'
      }
    </p>
    <Button className={styles.button} disabled={disabled} onClick={onClick}>
      { connected ?
        'View Stripe account' :
        'Connect with Stripe'
      }
    </Button>
  </section>
));
