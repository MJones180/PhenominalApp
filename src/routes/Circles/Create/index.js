import React from 'react';
import HeadTags from './headTags';
import Container from './container';
import Form from './Form';
import LimitReached from './LimitReached';

export default Container(({ circleLimitReached }) => (
  <main>
    <HeadTags />
    {circleLimitReached ? <LimitReached /> : <Form />}
  </main>
));
