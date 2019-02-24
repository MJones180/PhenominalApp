import React from 'react';
import Category from '../Category';
import Question from '../Question';

export default () => (
  <Category title="Donations">
    <Question title="How do I donate?">
      First, add funds to your account. Then, donate to any active event.
    </Question>
    <Question title="Does Phenominal keep any portion of my donation?">
      No, Phenominal donates 100% of all donations received.
    </Question>
    <Question title="How will my donation be used?">
      Donations will be appropriated by each charity to use at their own discretion.
    </Question>
    <Question title="What is the minimum donation?">
      There isn&apos;t, you can make donations of one cent!
    </Question>
    <Question title="Can I do recurring donations?">
      No. At the moment, donation subscriptions are not possible. This feature will be added in the future. Sorry for any inconvenience.
    </Question>
    <Question title="What can I donate to?">
      You can donate to any active event.
    </Question>
  </Category>
);
