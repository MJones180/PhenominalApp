import React from 'react';
import Box from '../Box';
import Balance from './Balance';
import styles from './index.css';

export default () => (
  <Box link="/add-funds" title="Add Funds">
    <h1 className={styles.balance}>
      <Balance />
    </h1>
  </Box>
);
