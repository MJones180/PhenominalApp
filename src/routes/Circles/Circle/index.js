import React from 'react';
import HeadTags from './headTags';
import Container from './container';
import Info from './Info';
import Manage from './Manage';
import Members from './Members';
import Settings from './Settings';

export default Container(({ id, isOwner, name }) => (
  <main>
    <HeadTags name={name} />
    <Info id={id} isOwner={isOwner} />
    <Members id={id} isOwner={isOwner} />
    {isOwner && <Settings id={id} />}
    {isOwner && <Manage id={id} />}
  </main>
));
