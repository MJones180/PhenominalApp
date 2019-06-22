import React from 'react';
import EmailSent from './EmailSent';
import Container from './container';
import Form from './Form';

export default Container(({ email, setEmail }) => (
  email ? <EmailSent email={email} /> : <Form setEmail={setEmail} />
));
