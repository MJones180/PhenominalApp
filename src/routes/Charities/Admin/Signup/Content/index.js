import React from 'react';
import EmailSent from './EmailSent';
import Container from './container';
import Auth from './Auth';

export default Container(({ email, setEmail }) => (
  email ? <EmailSent email={email} /> : <Auth setEmail={setEmail} />
));
