import React from 'react';
import Loading from 'components/Loaders/Spinner';
import HeadTags from './headTags';
import Container from './container';
import Confirmation from './Confirmation';
import Form from './Form';

export default Container(({ processing, results, ...props }) => (
  <main>
    <HeadTags />
    { processing && <Loading inline text="Processing" /> }
    { results && <Confirmation data={results} /> }
    { !processing && !results && <Form {...props} /> }
  </main>
));
