import React from 'react';
import Charities from './Charities';
import Donate from './Donate';
import Process from './Process';
import Explanation from './Explanation';
import Stats from './Stats';

export default () => (
  <main>
    <Stats />
    <Explanation />
    <Process />
    <Donate />
    <Charities />
  </main>
);
