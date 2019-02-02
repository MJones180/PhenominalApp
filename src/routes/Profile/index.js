import React from 'react';
import HeadTags from './headTags';
import Container from './container';
import Personal from './Personal';
import Info from './Info';
import Impact from './Impact';
import Social from './Social';
import Donations from './Donations';

export default Container(({ ownProfile, username }) => (
  <main>
    <HeadTags />
    {ownProfile && <Personal />}
    <Info username={username} />
    {ownProfile && <Impact />}
    <Social ownProfile={ownProfile} username={username} />
    <Donations username={username} />
  </main>
));
