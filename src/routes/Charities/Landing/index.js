import React from 'react';
import HeadTags from './headTags';
import Container from './container';
import All from './All';
import Current from './Current';
import Upcoming from './Upcoming';

export default Container(({ data }) => (
  <main>
    <HeadTags />
    <Current data={data.CurrentEvents} />
    <Upcoming data={data.UpcomingEvents} />
    <All />
  </main>
));
