import React from 'react';
import HeadTags from './headTags';
import Form from './Form';
import Header from './Header';
import Stripe from './Stripe';
import Container from './container';

export default Container(ein => (
  <main>
    <HeadTags {...ein} />
    <Header {...ein} />
    <Stripe {...ein} />
    <Form {...ein} />
  </main>
));
