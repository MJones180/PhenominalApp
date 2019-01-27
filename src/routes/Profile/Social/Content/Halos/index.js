import React from 'react';
import Items from './Items';
import Container from './container';

export default Container(data => (
  <div>
    <h3 className="general">
      Halos
    </h3>
    <Items {...data} />
  </div>
));
