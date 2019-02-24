import React from 'react';
import Category from '../Category';
import Question from '../Question';

export default () => (
  <Category title="General">
    <Question title="What is Phenominal?">
      Phenominal is a platform for making donations of any amount to a variety of charities.
    </Question>
    <Question title="Are there any fees to use Phenominal?">
      No, Phenominal is 100% free. There are absolutely no fees involved.
    </Question>
    <Question title="How does Phenominal make money?">
      Phenominal does not make any money. It was created for the sole purpose of allowing anyone to donate.
    </Question>
  </Category>
);
