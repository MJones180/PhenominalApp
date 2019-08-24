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
      This button can be found next to your balance. Adding funds is faciliated by Stripe.
    </Question>
    <Question title="Why is there a fee?">
      Stripe takes 2.2% + 30¢ on all funds added for processing fees.
    </Question>
    <Question title="What is Stripe?">
      Stripe is a payment processing service that Phenominal utilizes to add funds to your account.
      <Spacer />
      Find out more about Stripe <Link general external="https://stripe.com">here</Link>.
    </Question>
    <Question title="Do funds expire?">
      Yes, all funds must be donated within 80 days.
    </Question>
    <Question title="What happens when funds expire?">
      All funds over 80 days old will be automatically donated to one of the active events.
    </Question>
    <Question title="How do I view when my funds are going to expire?">
      <Button to="/balance">View Expirations</Button>
      <Spacer />
      The expirations can be found by clicking on your balance.
    </Question>
  </Category>
);
