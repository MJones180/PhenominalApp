import React from 'react';
import HeadTags from './headTags';
import Container from './container';
import Info from './Info';
import Members from './Members';
import Settings from './Settings';

export default Container(({ id, isOwner, name }) => (
  <main>
    <HeadTags name={name} />
    {isOwner && <Settings id={id} />}
    <Info id={id} isOwner={isOwner} />
    <Members id={id} />
  </main>
));
