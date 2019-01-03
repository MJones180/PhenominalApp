import React from 'react';
import HeadTags from './headTags';
import Container from './container';
import About from './About';
import Banner from './Banner';
import Expenses from './Expenses';
import Follow from './Follow';
import History from './History';

export default Container(({ ein, name }) => (
  <main>
    <HeadTags name={name} />
    <Follow ein={ein} />
    <Banner ein={ein} />
    <About ein={ein} />
    <Expenses ein={ein} />
    <History ein={ein} />
  </main>
));
