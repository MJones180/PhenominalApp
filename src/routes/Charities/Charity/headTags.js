import React from 'react';
import { Helmet } from 'react-helmet';

export default ({ charity }) => (
  <Helmet>
    <title>Charity: {charity.name}</title>
  </Helmet>
);
