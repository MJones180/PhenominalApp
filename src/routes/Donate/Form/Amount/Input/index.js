import React from 'react';
import { CurrencyInput } from 'components/Input';
import Container from './container';

export default Container(() => (
  <CurrencyInput
    label="Amount"
    name="amount"
  />
));
