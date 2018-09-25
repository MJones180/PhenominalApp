import React from 'react';
import { filter } from 'graphql-anywhere';
import Container from './container';
import Stats from './Stats';
import StatsFrag from './Stats/frag';
import Explanation from './Explanation';
import About from './About';
import Process from './Process';
import Donate from './Donate';
import Quote from './Quote';

export default Container(({ data }) => (
  <main>
    <Stats data={filter(StatsFrag, data)} />
    <Explanation />
    <About />
    <Process />
    <Donate />
    <Quote />
  </main>
));
