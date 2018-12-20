import React from 'react';
import HeadTags from './headTags';
import Container from './container';
import Picture from './Picture';
import Information from './Information';
import Preferences from './Preferences';
import Danger from './Danger';

export default Container(({ settingsQuery }) => (
  <main>
    <HeadTags />
    <Picture settingsQuery={settingsQuery} />
    <Information settingsQuery={settingsQuery} />
    <Preferences settingsQuery={settingsQuery} />
    <Danger />
  </main>
));
