import React from 'react';
import Input, { Textarea, PhoneNumberInput } from 'components/Input';
import Title from '../Title';
import Expenses from './Expenses';
import Name from './Name';

export default () => (
  <div>
    <Title>Charity Information</Title>
    <Name />
    <Textarea name="mission" label="Mission" />
    <Input name="location" label="Location" placeholder="City, State Zip" />
    <PhoneNumberInput name="phoneNumber" label="Phone Number" placeholder="(000) 000-0000" />
    <Input name="website" label="Website URL" placeholder="https://example.com" />
    <Expenses />
  </div>
);
