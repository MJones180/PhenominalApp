import React from 'react';
import { filter } from 'graphql-anywhere';
import HeadTags from './headTags';
import Container from './container';
import Image from './Image';
import Personal from './Personal';
import PersonalFrag from './Personal/frag';
import Preferences from './Preferences';
import PreferencesFrag from './Preferences/frag';
import Danger from './Danger';

export default Container(({ data }) => (
  <main>
    <HeadTags />
    <Image />
    <Personal data={filter(PersonalFrag, data.currentUser)} />
    <Preferences data={filter(PreferencesFrag, data.currentUser)} />
    <Danger />
  </main>
));
