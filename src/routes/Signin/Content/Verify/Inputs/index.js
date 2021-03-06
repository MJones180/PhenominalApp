import React from 'react';
import Input from 'components/Input';

export default () => (
  <div>
    <Input name="username" label="Username" />
    <Input name="nameFirst" label="First Name" />
    <Input name="nameLast" label="Last Name" />
    <Input name="email" label="Email" placeholder="email@example.com" />
  </div>
);
