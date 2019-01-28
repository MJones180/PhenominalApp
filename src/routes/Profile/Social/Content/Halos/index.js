import React from 'react';
import Header from './Header';
import Items from './Items';
import Container from './container';

export default Container(data => (
  <div>
    <Header />
    <Items {...data} />
  </div>
));
