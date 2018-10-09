import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { image } from 'utils/endpoints';
import { stripeKey } from 'utils/keys';
import { Submit } from 'components/Button';
import Container from './container';
import styles from './index.css';

export default Container(({ amount, email, submit }) => (
  <StripeCheckout
    amount={amount}
    currency="USD"
    description="Add funds to your account."
    email={email}
    image={image('logos/stripeCheckoutImage.png', { width: 75 })}
    name="Phenominal"
    panelLabel="Add Funds:"
    stripeKey={stripeKey}
    token={submit}
  >
    <Submit className={styles.button} type="button" center special>
      Continue
    </Submit>
  </StripeCheckout>
));
