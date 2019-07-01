import React from 'react';
import { Helmet } from 'react-helmet';

export default ({ ein }) => (
  <Helmet>
    <title>Charity Admin { ein }</title>
  </Helmet>
);
