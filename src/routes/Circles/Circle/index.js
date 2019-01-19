import React from 'react';
import HeadTags from './headTags';
import Container from './container';
import Info from './Info';
import Manage from './Manage';
import Members from './Members';
import Settings from './Settings';

export default Container(({ id, isOwner, name, open, ownerUsername }) => (
  <main>
    <HeadTags name={name} />
    <Info id={id} isOwner={isOwner} />
    <Members id={id} isOwner={isOwner} ownerUsername={ownerUsername} />
    {isOwner && <Settings id={id} />}
    {isOwner && <Manage open={open} id={id} ownerUsername={ownerUsername} />}
  </main>
));
