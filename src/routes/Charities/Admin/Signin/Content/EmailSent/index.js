import React from 'react';
import Box from '../Box';
import styles from './index.css';

export default ({ email }) => (
  <Box title="Email Validation">
    <h5 className={styles.text}>
      A confirmation email has been sent to <span>{ email }</span>. Upon clicking on the link, you will be signed in.
    </h5>
  </Box>
);
