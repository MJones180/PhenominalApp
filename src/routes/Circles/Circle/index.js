import React from 'react';
import HeadTags from './headTags';
import Container from './container';
import Info from './Info';
import Join from './Join';
import Members from './Members';

// Owner Actions (invite, kick, disband, settings)
// Join Button
// Circle Info (name, description, date created)
// Members (usernames and dots)
// Feed

export default Container(({ id, isOwner, name }) => (
  <main>
    <HeadTags name={name} />
    { !isOwner && <Join id={id} /> }
    <Info id={id} />
    <Members id={id} />
  </main>
));
