import React from 'react';
import Category from '../Category';
import Question from '../Question';

export default () => (
  <Category title="General">
    <Question title="What is Phenominal?">
      Phenominal is a platform for making donations of any amount to a variety of charities.
    </Question>
    <Question title="Are there any fees to use Phenominal?">
      Donating is 100% free. However, there exists a Stripe processing fee for adding funds to your account.
    </Question>
    <Question title="How does Phenominal make money?">
      Phenominal does not make any money. It was created for the sole purpose of allowing anyone to donate.
    </Question>
  </Category>
);
