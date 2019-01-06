import React from 'react';
import Container from './container';
import Items from './Items';
import Search from './Search';

export default Container(({ data, ownProfile }) => (
  <div>
    <Items circles={data} ownProfile={ownProfile} />
    { ownProfile && <Search /> }
  </div>
));
