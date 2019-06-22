import React from 'react';
import Box from '../Box';
import Charity from './Charity';
import Notice from './Notice';
import Facebook from './Providers/Facebook';
import Google from './Providers/Google';

export default props => (
  <Box title="Sign In">
    <Facebook {...props} />
    <Google {...props} />
    <Notice />
    <Charity />
  </Box>
);
