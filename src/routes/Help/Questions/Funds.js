import React from 'react';
import Button from 'components/Button';
import Link from 'components/Link';
import Category from '../Category';
import Question from '../Question';
import Spacer from '../Spacer';

export default () => (
  <Category title="Funds">
    <Question title="How do I add funds to my account?">
      <Button to="/add-funds" special>Add Funds</Button>
      <Spacer />
      This button can be found next to your balance.
    </Question>
    <Question title="What is Stripe?">
      Stripe is a payment processing service that Phenominal utilizes to add funds to your account.
      <Spacer />
      Find out more about Stripe <Link general external="https://stripe.com">Here</Link>.
    </Question>
  </Category>
);
