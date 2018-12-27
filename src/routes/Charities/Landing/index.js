import React from 'react';
import HeadTags from './headTags';
import All from './All';
import Current from './Current';
import Upcoming from './Upcoming';

export default () => (
  <main>
    <HeadTags />
    <Current />
    <Upcoming />
    <All />
  </main>
);
