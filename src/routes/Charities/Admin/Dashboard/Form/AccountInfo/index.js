import React from 'react';
import Input from 'components/Input';
import Title from '../Title';

export default () => (
  <div>
    <Title>Account Information</Title>
    <Input name="email" label="Email" placeholder="email@example.com" />
    <Input name="representative" label="Representative" />
  </div>
);
