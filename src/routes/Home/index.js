import React from 'react';
import Charities from './Charities';
import Donate from './Donate';
import Explanation from './Explanation';
import Stats from './Stats';
import Steps from './Steps';

export default () => (
  <main>
    <Stats />
    <Explanation />
    <Steps />
    <Donate />
    <Charities />
  </main>
);
