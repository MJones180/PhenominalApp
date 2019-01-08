import React from 'react';
import HeadTags from './headTags';
import Container from './container';
import Join from './Join';
import Members from './Members';

// Owner Actions (invite, kick, disband, settings)
// Join Button
// Circle Info (name, description, date created)
// Stats (aggregate dot total and average, user count)
// Members (usernames and dots)
// Feed

export default Container(({ id, name }) => (
  <main>
    <HeadTags name={name} />
    <Join id={id} />
    <Members id={id} />
  </main>
));
