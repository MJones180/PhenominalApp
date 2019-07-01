import React from 'react';
import HeadTags from './headTags';
import Info from './Info';
import Container from './container';

export default Container(({ ein }) => (
  <main>
    <HeadTags ein={ein} />
    <Info />
  </main>
));
