import React from 'react';
import { Helmet } from 'react-helmet';

export default ({ name }) => (
  <Helmet>
    <title>Circle: {name}</title>
  </Helmet>
);
