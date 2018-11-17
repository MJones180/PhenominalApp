import React from 'react';
import HeadTags from './headTags';
import Container from './container';
import Personal from './Personal';
import Social from './Social';
import Info from './Info';

export default Container(({ ownProfile, profileQuery }) => (
  <main>
    <HeadTags />
    {ownProfile && <Personal />}
    <Info profileQuery={profileQuery} />
    <Social />
  </main>
));
